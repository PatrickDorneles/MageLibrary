import { PrismaClient } from '.prisma/client'

export function createUserService(prisma: PrismaClient) {

	async function findUserById(id: string) {
		return await prisma.user.findFirst({
			where: { id }
		})
	}
    

	return { findUserById }
}

export type UserService = ReturnType<typeof createUserService>