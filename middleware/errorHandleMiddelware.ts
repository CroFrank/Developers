import { StatusCodes } from "http-status-codes";
import { ErrorRequestHandler } from 'express'

export const errorHandleMiddelware: ErrorRequestHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    const msg = err.message || 'something went wrong'
    res.status(statusCode).json({ msg: msg })
}