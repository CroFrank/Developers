import { NextFunction, Request, Response } from 'express'
import { UnauthenticatedError } from '../errors/customErrors.js'
import { verifyJWT } from '../utils/tokenUtils.js'
import { JwtPayload } from 'jsonwebtoken';

declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload;
        }
    }
}

export const authUser = (req: Request, res: Response, next: NextFunction) => {
    if (!req.cookies.token) throw new UnauthenticatedError('authentication invalid')
    try {
        const user = verifyJWT(req.cookies.token)
        req.user = { user }
        next()
    } catch (err) {
        throw new UnauthenticatedError('authentication invalid')
    }
}