import express from 'express'
import routes from './routes/RouteProductos.js'
import morgan from 'morgan'
import { PORT } from './config/config.js'

const app = express()

//settings

app.use(morgan('dev'));

app.set('port', PORT);

app.use(express.json())


// routes

app.use('/api/1.0', routes);

export default app