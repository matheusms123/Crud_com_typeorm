import 'reflect-metadata'
import express from 'express'
import cors from 'cors'

import route from './database/routers/router'

import { AppDataSource } from './database/data-source'
import userRouter from './database/controllers/userController'

const app = express()

app.use(cors())
app.use(express.json())
app.use(route)

// app.use(userRouter)


AppDataSource.initialize().then(async () => {
    console.log("Está rodando!")

    app.listen(3032, async () => {
        console.log("Estpá rodando na porta: 3032!")
    })
})