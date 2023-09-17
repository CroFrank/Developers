import 'express-async-errors'
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import devRouter from './routes/devRouter.js'
import userRouter from './routes/userRouter.js'
import statsRouter from './routes/statsRouter.js'
import { errorHandleMiddelware } from './middleware/errorHandleMiddelware.js'
import { authUser } from './middleware/authMiddelware.js'
import cookieParser from 'cookie-parser'
import path from 'path'


import { dirname } from 'path';

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.resolve(__dirname, './public')))
app.use(cookieParser())
app.use(express.json())
if (process.env.NODE_ENV) {
    app.use(morgan('dev'))
}

app.use('/api/v1/user', userRouter)
app.use('/api/v1/alldevelopers', devRouter)
app.use('/api/v1/stats', authUser, statsRouter)

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public', 'index.html'))
})

app.use('*', (req, res) => {
    res.status(404).json({ msg: 'Page not found' })
})

app.use(errorHandleMiddelware)

const port = process.env.PORT

if (!process.env.MONGO_URL) {
    console.error("MONGO_URL environment variable is not set.");
    process.exit(1);
}

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    });