import { Author } from '.prisma/client'
import { NotFound } from 'http-errors'
import { AuthorService } from '../services/author'
import { createControllerFunction } from '../util/createControllerFunction'

export function createAuthorController(service: AuthorService) {

	const getAuthorById = createControllerFunction<{ id: string }>(async (req, res) => {
		const author = await service.getAuthorById(req.params.id)

		if(!author) {
			throw new NotFound('author.notfound')
		}

		return res.json(author)
	})

	const postNewAuthor = createControllerFunction<unknown, Author>(async () => {
		// TODO
	})

	return {
		getAuthorById,
		postNewAuthor
	}
}

export type AuthorController = ReturnType<typeof createAuthorController>