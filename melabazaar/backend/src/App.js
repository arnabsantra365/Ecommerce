import express from 'express'
import cors from 'cors'
import cookieparser from 'cookie-parser';
import bodyParser from 'body-parser';
const app=express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 200,
    credentials:true,
}));
app.use(cookieparser());
app.use(express.json()); // body parser required for getting data
app.use(bodyParser.json());
import userRouter from "./routes/user.routes.js";
//localhost:8000/api/v1/users/register(...)
app.use("/api/v1/users",userRouter) //this gives the controll to the userrRouter function in routes



export {app};