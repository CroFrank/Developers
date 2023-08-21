import crypto from 'node:crypto';
import { DevModel } from '../models/DevModel.js';
let developers = [
    { id: crypto.randomUUID(), name: 'Mike Tyson', skills: 'javascript' },
    { id: crypto.randomUUID(), name: 'Zoran Malenica', skills: 'HTML' },
];
export const getAllDevs = (req, res) => {
    res.status(200).json({ developers });
};
export const createNewDev = async (req, res) => {
    const dev = await DevModel.create('fs');
    res.status(200).json({ dev });
};
export const getSpecificDev = (req, res) => {
    const { id } = req.params;
    const dev = developers.find((dev) => dev.id === id);
    if (!dev) {
        return res.status(404).json({ msg: `no dev with id: ${id}` });
    }
    res.status(200).json(dev);
};
export const updateSpecificDev = (req, res) => {
    const { name, skills } = req.body;
    if (!name || !skills) {
        return res.status(400).json({ msg: "please provide name and skills" });
    }
    const { id } = req.params;
    const dev = developers.find((dev) => dev.id === id);
    if (!dev) {
        return res.status(404).json({ msg: `no dev with id: ${id}` });
    }
    dev.name = name;
    dev.skills = skills;
    res.status(200).json({ msg: 'Developer modified', dev });
};
export const deleteDev = (req, res) => {
    const { id } = req.params;
    const dev = developers.find((dev) => dev.id === id);
    if (!dev) {
        return res.status(404).json({ msg: `no dev with id: ${id}` });
    }
    const deleteDev = developers.filter((dev) => dev.id !== id);
    res.status(200).json(deleteDev);
};
