import { RequestHandler } from 'express';
import { DevModel } from '../models/DevModel.js'
import { StatusCodes } from 'http-status-codes';
import { NotFoundError } from '../errors/customErrors.js'

export const getAllDevs: RequestHandler = async (req, res) => {
    const devs = await DevModel.find({ createdBy: req.user?.user.userId })
    res.status(StatusCodes.OK).json({ devs })
}

export const createNewDev: RequestHandler = async (req, res) => {
    req.body.createdBy = req.user?.user.userId
    const dev = await DevModel.create(req.body)
    res.status(StatusCodes.CREATED).json(dev)
}

export const getSpecificDev: RequestHandler = async (req, res) => {
    const { id } = req.params
    const dev = await DevModel.findById(id)
    if (!dev) {
        throw new NotFoundError('no dev with that id')
    }
    res.status(StatusCodes.OK).json(dev)
}

export const updateSpecificDev: RequestHandler = async (req, res) => {
    const { id } = req.params
    const dev = await DevModel.findByIdAndUpdate(id, req.body, { new: true })
    if (!dev) {
        throw new NotFoundError('no dev with that id')
    }
    res.status(StatusCodes.OK).json({ msg: 'Developer modified', dev: dev })
}

export const deleteDev: RequestHandler = async (req, res) => {
    const { id } = req.params
    const dev = await DevModel.findByIdAndDelete(id)
    if (!dev) {
        throw new NotFoundError('no dev with that id')
    }
    res.status(StatusCodes.OK).send({ msg: "deleteted", dev: dev })
}
