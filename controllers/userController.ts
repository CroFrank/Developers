import { UserModel } from '../models/UserModel.js'
import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { hashPassword } from '../utils/passUtils.js'

export const createNewUser: RequestHandler = async (req, res) => {
    const isFirst = await UserModel.countDocuments() === 0
    req.body.role = isFirst ? 'admin' : 'user'
    req.body.password = await hashPassword(req.body.password)
    const user = await UserModel.create(req.body)
    res.status(StatusCodes.CREATED).json({ user, msg: 'user created' })
}

export const loginUser: RequestHandler = async (req, res) => {
    const user = await UserModel.create(req.body)
    res.status(StatusCodes.CREATED).json(user)
}