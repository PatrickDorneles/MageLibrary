import { PrismaClient } from '.prisma/client'

export function createAuthorService(prisma: PrismaClient) {

	async function getAuthorById(id: string) {
		return prisma.author.findFirst({
			where: {
				id
			}
		})
	}

	return {
		getAuthorById
	}
}

export type AuthorService = ReturnType<typeof createAuthorService>

