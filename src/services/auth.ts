import { BadRequest } from 'http-errors'
import { UserService } from './user'

export function createAuthService(userService: UserService) {

	async function authenticate(userToken: string) {
		const id = ''
		try {
			const user = await userService.findUserById(id)

			return user
		} catch (error) {
			throw new BadRequest('auth.unexpected')
		}
	}

	return {
		authenticate
	}
}

export type AuthService = ReturnType<typeof createAuthService>