import { type Request, type Response, type NextFunction } from 'express';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
	console.error(err)
	const status = err.status || 500
	res.status(status).json({ error: err.message || 'internal error' })
}

export default { errorHandler }
