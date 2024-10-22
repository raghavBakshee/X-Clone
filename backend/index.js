import dbConnection from './config/database.js'
import dotenv from "dotenv"
import express from "express"
import cookieParser from "cookie-parser"
import userRoute from "./routes/userRoute.js"
import tweetRoute from "./routes/tweetRoute.js"
import cors from 'cors'
import path from "path"
dotenv.config({
    path: ".env"
})
const PORT_ENV = process.env.PORT || 3001;
dbConnection();
const app = express();

const _dirname = path.resolve();


// middlewares
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin:"https://x-clone-npwq.onrender.com",
    credentials: true
}
app.use(cors(corsOptions))


app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", tweetRoute);

app.use(express.static(path.join(_dirname, "/frontend/twitterclone/build")))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "twitterclone", "build", "index.html"))
});
app.listen(PORT_ENV, () => {
   console.log(`Server listens at port ${PORT_ENV} `)
})