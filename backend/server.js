import express, { application } from 'express'
import productRoutes from './routs/productRoutes.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()
const port = process.env.PORT || 5000
connectDB()
const app = express()

application.get('/', (reg, res) => {
    res.send('API is running.....')
})
app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`))
