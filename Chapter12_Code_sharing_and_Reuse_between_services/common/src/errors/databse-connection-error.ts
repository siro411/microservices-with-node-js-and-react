import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
	statusCode = 500;
	reason = 'Error connecting to databse';

	constructor() {
		super('Invalid request parameters');

		Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
	}

	serializeErrors() {
		return [
			{ message: this.reason }
		];
	}
}

