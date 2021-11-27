import { Router } from 'express'

export function createAppRouter(routes: { [key: string]: Router }) {
	const router = Router()
	const routeKeys = Object.keys(routes)

	routeKeys.forEach((route) => {
		router.use(route, routes[route])
	})

	return router
}