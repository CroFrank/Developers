import { UnauthenticatedError, UnauthorizedError } from '../errors/customErrors.js';
import { verifyJWT } from '../utils/tokenUtils.js';
export const authUser = (req, res, next) => {
    if (!req.cookies.token)
        throw new UnauthenticatedError('authentication invalid');
    try {
        const user = verifyJWT(req.cookies.token);
        req.user = { user };
        next();
    }
    catch (err) {
        throw new UnauthenticatedError('authentication invalid');
    }
};
export const authorizePermissions = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user?.user.role)) {
            throw new UnauthorizedError('Unauthorized to access this route');
        }
        next();
    };
};
