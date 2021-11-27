import { Router } from 'express'
import { BookController } from '../controllers/book'

export function createBookRouter(controller: BookController) {
	const router = Router()

	router.get(':id', controller.getBookById)


	return router
}