import express from 'express'
import cors from 'cors'
import cookieparser from 'cookie-parser';
const app=express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 200,
    credentials:true,
}));
app.use(cookieparser());





export {app};