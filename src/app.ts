import { PrismaClient } from '.prisma/client'
import express from 'express'
import { createAuthorController } from './controllers/author'
import { createBookController } from './controllers/book'

import { errorHandler } from './middlewares/errorHandler'
import { httpErrorHandler } from './middlewares/httpErrorHandler'
import { createAppRouter } from './routes'
import { createAuthorRouter } from './routes/author'
import { createBookRouter } from './routes/book'
import { createAuthorService } from './services/author'
import { createBookService } from './services/book'

export function createApp(port: number) {
	const app = express()

	const getServices = (prisma: PrismaClient) => ({
		author: createAuthorService(prisma),
		book: createBookService(prisma)
	})

	const getControllers = (services: ReturnType<typeof getServices>) => ({
		author: createAuthorController(services.author),
		book: createBookController(services.book)
	})

	const getAppRouter = (controllers: ReturnType<typeof getControllers>) => createAppRouter({
		author: createAuthorRouter(controllers.author),
		book: createBookRouter(controllers.book)
	})
	
	function start() {
		const prisma = new PrismaClient()

		const services = getServices(prisma)
		const controllers = getControllers(services)
		const router = getAppRouter(controllers)

		app.use(router)

		app.use(httpErrorHandler)
		app.use(errorHandler)
    
		app.listen(port, () => {
			console.log(`Running on localhost:${port}`)
		})
	}

	return {
		start
	}

}