import { ErrorRequestHandler } from 'express'
import { HttpError, isHttpError } from 'http-errors'

export const httpErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
	const isErrHttpError = isHttpError(err)
	
	if(isErrHttpError) {
		const httpErr = err as HttpError
		return res.status(httpErr.status).json({ message: httpErr.message })
	}

	next(err)
}