import { StatusCodes } from 'http-status-codes'
import { UserModel } from '../models/UserModel.js'
import { DevModel } from '../models/DevModel.js'
import { RequestHandler } from 'express'

export const getCurrentUser: RequestHandler = async (req, res) => {
    const user = await UserModel.findOne({ _id: req.user?.user.userId })
    if (!user) throw new Error('No user')
    const noPassUser = user.removePass()
    res.status(StatusCodes.OK).json({ user: noPassUser })
}

export const getApplicationStats: RequestHandler = async (req, res) => {
    const users = await UserModel.countDocuments()
    const devs = await DevModel.countDocuments()
    res.status(StatusCodes.OK).json({ users, devs })
}

export const updateUser: RequestHandler = async (req, res) => {
    const obj = { ...req.body }
    delete obj.password
    const user = await UserModel.findByIdAndUpdate(req.user?.user.userId, obj)
    res.status(StatusCodes.OK).json({ user })
}