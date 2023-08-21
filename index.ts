import * as dotenv from 'dotenv'
dotenv.config()
import express, { ErrorRequestHandler } from 'express'
import morgan from 'morgan'

import devRouter from './routes/devRouter.js'

const app = express()

app.use(express.json())
if (process.env.NODE_ENV) {
    app.use(morgan('dev'))
}

app.get('/', (req, res) => {
    res.send('Hello World! There')
})

//all routes
app.use('/api/v1/alldevelopers', devRouter)

app.use('*', (req, res) => {
    res.status(404).json({ msg: 'Page not found' })
})

app.use((err: ErrorRequestHandler, req: express.Request, res: express.Response, next: express.NextFunction): void => {
    console.log(err)
    res.status(500)
})

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})