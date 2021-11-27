import { NextFunction, Request, Response } from 'express'

interface ParsedQs { [key: string]: undefined | string | string[] | ParsedQs | ParsedQs[] }

export interface ParamsDictionary {
    [key: string]: string;
}

type ControllerFunction<Params, Body, Query> = 
    (req: Request<Params, unknown, Body, Query>, res: Response, next: NextFunction) => Promise<unknown>

/**
 * @name CreateControllerFunction
 * 
 * @description
 * Creates a function that should be used in a internal router, if an error is thrown
 * it is passed to the next function.
 * It also types the Params, Body and Query in a friendlier way.
 * 
 * @param routeFunction 
 */
export function createControllerFunction<
    Params = ParamsDictionary,
    Body = Record<string, never>,
    Query = ParsedQs
>(routeFunction: ControllerFunction<Params, Body, Query>) {
	return async (req: Request<Params, unknown, Body, Query>, res: Response, next: NextFunction) => {
		try {
			return await routeFunction(req, res, next)
		} catch (error) {
			next(error)
		}
	}
}