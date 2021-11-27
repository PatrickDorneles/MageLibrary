import { PrismaClient } from '.prisma/client'

type CreateBookModel = {
	description: string
	title: string
	authorId: string
	genreId: string
}

export function createBookService(prisma: PrismaClient) {

	async function createBook({ description, title, authorId, genreId }: CreateBookModel) {
		return await prisma.book.create({
			data: {
				description,
				title,
				authorId,
				genreId
			}
		})
	}

	async function findBookById(id: string) {
		return await prisma.book.findFirst({
			where: {
				id
			}
		})
	}

	return {
		createBook,
		getBookById: findBookById
	}
}

export type BookService = ReturnType<typeof createBookService>