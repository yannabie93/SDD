import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import userRouter from './routers/user.js'
import adminRouter from './routers/admin.js'
import questionsRouter from './routers/question.js'
import choicesRouter from './routers/choices.js'
import authRouter from './routers/auth.js'
import resultsRouter from './routers/results.js'
import completedRouter from './routers/completed.js'
import userRoute from './routers/userRoute.js'
const PORT = process.env.PORT || 3000;

const app = express()

app.use(cors())
app.use(express.json())

const connectDB = async () =>{
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.hijtikb.mongodb.net/SDD?retryWrites=true&w=majority')
        console.log("Database Connection established")
    } catch (error) {
        console.error(error);
    }
}

app.use('/api/users', userRouter)
app.use('/api/admins', adminRouter)
app.use('/api/questions', questionsRouter)
app.use('/api/choices', choicesRouter)
app.use('/api/results',resultsRouter)
app.use('/api/auth', authRouter)
app.use('/api/completed', completedRouter)
app.use('/api/', userRoute);

app.listen(PORT, () =>{
    connectDB()
    console.log(`Server Listening to port http://localhost:${PORT}`)
})