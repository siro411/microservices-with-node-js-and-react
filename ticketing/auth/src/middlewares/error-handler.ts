import { Request, Response, NextFunction } from "express";
// import { RequestValidationError } from '../errors/request-validation-error'; 
// import { DatabaseConnectionError } from '../errors/databse-connection-error';
import { CustomError } from "../errors/custom-error";

export const errorHandler = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// if (err instanceof RequestValidationError) {
	// const formattedErrors = err.errors.map (error =>{
	//     if (error.type === 'field') {
	//         return { message: error.msg, field: error.path };
	//     }
	//     return { message: error.msg, field: 'unknown' };
	// });
	// return res.status(400).send({errors: formattedErrors});
	// return res.status(400).send({errors: err.serializeErrors()});
	// }

	// if(err instanceof DatabaseConnectionError) {
	//     // return res.status(500).send({erors: [
	//     //     { message: err.reason }
	//     // ]});
	//     return res.status(500).send({errors: err.serializeErrors()});
	// }

	if (err instanceof CustomError) {
		return res.status(err.statusCode).send({ errors: err.serializeErrors() });
	}

	res.status(400).send({
		erros: [{ message: 'Something went wrong' }]
	});
};