import 'express-async-errors'
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import devRouter from './routes/devRouter.js'
import { errorHandleMiddelware } from './middleware/errorHandleMiddelware.js'
import { validationMiddelware } from './middleware/validationMiddelware.js'

const app = express()

app.use(express.json())
if (process.env.NODE_ENV) {
    app.use(morgan('dev'))
}

app.post('/api/v1/test', validationMiddelware, (req, res) => {
    const { name } = req.body
    res.json({ msg: `hello ${name}` })
})

//all routes
app.use('/api/v1/alldevelopers', devRouter)

//error handling
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