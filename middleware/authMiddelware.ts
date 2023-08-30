import { NextFunction, Request, Response, RequestHandler } from 'express'
import { UnauthenticatedError, UnauthorizedError } from '../errors/customErrors.js'
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

export const authorizePermissions = (...roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!roles.includes(req.user?.role)) {
            throw new UnauthorizedError('Unauthorized to access this route')
        }
        next()
    }
}