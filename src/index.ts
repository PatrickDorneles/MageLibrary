import './config/env'
import express from 'express'

import { errorHandler } from './middlewares/errorHandler'
import { httpErrorHandler } from './middlewares/httpErrorHandler'

import { AuthorRouter } from './routes/author'
import { GenreRouter } from './routes/genre'
import { UserRouter } from './routes/user'
import { BookRouter } from './routes/book'

const port = process.env.PORT || 3000
const app = express()

app.use('/author', AuthorRouter)
app.use('/genre', GenreRouter)
app.use('/book', BookRouter)
app.use('/user', UserRouter)

app.use(httpErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
	console.log(`Running on localhost:${port}`)
})