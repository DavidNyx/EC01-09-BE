import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRouter from './routes/userRouter.js'
import productRouter from './routes/productRouter.js'
import categoryRouter from './routes/categoryRouter.js'

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())


app.use('/auth', authRouter)
app.use('/api/product', productRouter)
app.use('/api/category', categoryRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})