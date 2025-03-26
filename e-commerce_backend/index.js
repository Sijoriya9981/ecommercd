import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
import connectDB from './config/ConnectDB.js';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet'
import userRouter from './route/userRoutes.js';
const app = express();

// cors is usedd to connect frontend and backend
app.use(cors())
app.options('*', cors());


app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'));
app.use(helmet({
    crossOriginResourcePolicy: false
}))


const PORT = process.env.PORT || 8000;

// app.get('/', (req, res) => {
//     console.log("Server is runing " + PORT)
//     res.json({
//         message: "Server is runing " + PORT
//     })
// })
app.get("/", (req, res) => {
    res.send("API Working")
});

app.listen(PORT, () => console.log(`Server started on PORT:${PORT}`))

app.use('/api/user', userRouter)


connectDB().then(() => {

})