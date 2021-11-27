import { Router } from 'express'
import { AuthorController } from '../controllers/author'

export function createAuthorRouter(controller: AuthorController) {
	const router = Router()

	router.get('/:id', controller.getAuthorById)
	
	return router
}
