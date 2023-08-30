import { UserModel } from '../models/UserModel.js'
import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { comparePasswords, hashPassword } from '../utils/passUtils.js'
import { UnauthenticatedError } from '../errors/customErrors.js';
import { createJWT } from '../utils/tokenUtils.js';

export const createNewUser: RequestHandler = async (req, res) => {
    const isFirst = await UserModel.countDocuments() === 0
    req.body.role = isFirst ? 'admin' : 'user'
    req.body.password = await hashPassword(req.body.password)
    const user = await UserModel.create(req.body)
    res.status(StatusCodes.CREATED).json({ user, msg: 'user created' })
}

export const loginUser: RequestHandler = async (req, res) => {
    const user = await UserModel.findOne({ email: req.body.email })
    if (!user) throw new UnauthenticatedError('email do not exist')
    const isGoodPass = await comparePasswords(req.body.password, user.password!)
    if (!isGoodPass) throw new UnauthenticatedError('invalid password')

    const token = createJWT({ userId: user._id, role: user.role })
    res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + (1000 * 3600 * 24)),
        secure: process.env.NODE_ENV === 'production'
    })
    res.status(StatusCodes.OK).json({ msg: 'user logged in' })
}

export const logout: RequestHandler = (req, res) => {
    res.cookie('token', 'logout', {
        httpOnly: true,
        expires: new Date(Date.now())
    })
    res.status(StatusCodes.OK).json({ msg: 'user logged out' })
}