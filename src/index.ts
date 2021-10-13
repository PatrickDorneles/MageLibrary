import express from 'express'
import './config/env'

const port = process.env.PORT || 3000
const app = express()

app.listen(port, () => {
	console.log(`Running on localhost:${port}`)
})