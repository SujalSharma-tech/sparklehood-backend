import { Request, Response, NextFunction } from 'express';

interface ErrorResponse {
  message: string;
  status: number;
}

export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  let error: ErrorResponse = {
    message: err.message || 'Server Error',
    status: 500,
  };

  if ('statusCode' in err) {
    error.status = err.statusCode;
  }

  res.status(error.status).json({
    success: false,
    error: error.message,
  });
};