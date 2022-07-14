import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRouter from './routes/userRouter.js'

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())


app.use('/auth', authRouter)


const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})