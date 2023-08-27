import { UserModel } from '../models/UserModel.js';
import { StatusCodes } from 'http-status-codes';
import { hashPassword } from '../utils/passUtils.js';
export const createNewUser = async (req, res) => {
    const isFirst = await UserModel.countDocuments() === 0;
    req.body.role = isFirst ? 'admin' : 'user';
    req.body.password = await hashPassword(req.body.password);
    const user = await UserModel.create(req.body);
    res.status(StatusCodes.CREATED).json({ user, msg: 'user created' });
};
export const loginUser = async (req, res) => {
    const user = await UserModel.create(req.body);
    res.status(StatusCodes.CREATED).json(user);
};
