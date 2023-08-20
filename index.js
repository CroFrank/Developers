import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import crypto from 'node:crypto';
let developers = [
    { id: crypto.randomUUID(), name: 'Mike Tyson', skills: 'javascript' },
    { id: crypto.randomUUID(), name: 'Zoran Malenica', skills: 'HTML' },
];
const app = express();
app.use(express.json());
if (process.env.NODE_ENV) {
    app.use(morgan('dev'));
}
app.post('/', (req, res) => {
    res.json({ message: 'Data received', data: req.body });
});
app.get('/', (req, res) => {
    res.send('Hello World! There');
});
// get all devs
app.get('/api/v1/alldevelopers', (req, res) => {
    res.status(200).json({ developers });
});
// create dev
app.post('/api/v1/alldevelopers', (req, res) => {
    const { name, skills } = req.body;
    if (!name || !skills) {
        return res.status(400).json({ msg: "please provide name and skills" });
    }
    const id = crypto.randomUUID();
    const dev = { id, name, skills };
    developers.push(dev);
    res.status(200).json({ dev });
});
// get specific dev
app.get('/api/v1/alldevelopers/:id', (req, res) => {
    const { id } = req.params;
    const dev = developers.find((dev) => dev.id === id);
    if (!dev) {
        return res.status(404).json({ msg: `no dev with id: ${id}` });
    }
    res.status(200).json(dev);
});
// update specific dev
app.patch('/api/v1/alldevelopers/:id', (req, res) => {
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
});
// delete specific dev
app.delete('/api/v1/alldevelopers/:id', (req, res) => {
    const { id } = req.params;
    const dev = developers.find((dev) => dev.id === id);
    if (!dev) {
        return res.status(404).json({ msg: `no dev with id: ${id}` });
    }
    const deleteDev = developers.filter((dev) => dev.id !== id);
    res.status(200).json(deleteDev);
});
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
