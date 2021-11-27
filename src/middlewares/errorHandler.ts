import { ErrorRequestHandler } from 'express'
import { InternalServerError } from 'http-errors'


export const errorHandler: ErrorRequestHandler = (err, req, res) => {
	const httpErr = new InternalServerError('Internal Server Error')

	console.error(err)

	return res.status(httpErr.status).send(httpErr.message)
}