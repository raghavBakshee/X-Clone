import dbConnection from './config/database.js'
import dotenv from "dotenv"
import express from "express"
import cookieParser from "cookie-parser"
import userRoute from "./routes/userRoute.js"
import tweetRoute from "./routes/tweetRoute.js"

dotenv.config({
    path: ".env"
})
const PORT_ENV = process.env.PORT || 3001;
dbConnection();
const app = express();

// middlewares
app.use(express.urlencoded({
    extends: true
}))
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", tweetRoute);

app.listen(PORT_ENV, () => {
    console.log(`Server listens at port ${PORT_ENV}`)
})