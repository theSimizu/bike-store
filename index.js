import 'dotenv/config'

import helmet from 'helmet'
import logger from 'morgan'
import process from 'process'
import express from 'express'
import compression from 'compression'
import cookieParser from 'cookie-parser'

import sequelize from './config/database.js'

import indexRouter from './routes/indexRoute.js'
import bikesRouter from './routes/bikesRoute.js'
import partsRouter from './routes/partsRoute.js'
import clietsRouter from './routes/clientsRoute.js'
import accessoriesRouter from './routes/accessoriesRoute.js'

sequelize.sync({force: false}).then(() => console.log('Database Synced'))
const port =  process.argv[2] || 3000

const app = express()

// View engine setup
app.set('views', './views')
app.set('view engine', 'jade')

// Middlewares
app.use(helmet())
app.use(logger('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false }))
app.use(compression())

// Routers
app.use('/', indexRouter)
app.use('/bikes', bikesRouter)
app.use('/parts', partsRouter)
app.use('/clients', clietsRouter)
app.use('/accessories', accessoriesRouter)

app.listen(port, () => console.log(`Listening on port ${port}`))