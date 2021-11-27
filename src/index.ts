import { createApp } from './app'
import './config/env'

const port = Number(process.env.PORT) || 3000

const app = createApp(port)

app.start()