import { NextFunction, Request, Response } from 'express'
import { NotFound } from 'http-errors'
import { BookService } from '../services/book'
import { createControllerFunction } from '../util/createControllerFunction'


export function createBookController(service: BookService) {

	const getBookById = createControllerFunction(async (req,res) => {
		const { id } = req.params

		const book = await service.getBookById(id)

		if(!book) {
			throw new NotFound('book.notfound')
		}

		return res.status(200).json(book) 
	})

	return {
		getBookById
	}
}

export type BookController = ReturnType<typeof createBookController>