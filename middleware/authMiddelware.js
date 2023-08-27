import { UnauthenticatedError } from '../errors/customErrors.js';
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
