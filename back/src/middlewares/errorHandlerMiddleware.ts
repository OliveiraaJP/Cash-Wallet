import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/error.js";
import { chalkLogger } from "../utils/chalkLogger.js";

export function errorHandlerMiddleware(error: any, req: Request, res: Response, next: NextFunction) {
    if (error instanceof AppError) {
		chalkLogger.log('error', error.message);
		return res.status(error.statusCode).send({ message: error.message, status: 'error' });
	}
	else {
		chalkLogger.logObject('error', error);
		return res.status(500).send({message: 'Internal server error', status: 'error'});
	}
} 