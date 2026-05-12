const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()
// import dns from "dns";
const dotenv = require('dotenv')
const dns = require("dns")
dns.setServers(["1.1.1.1" , "8.8.8.8"])
dotenv.config({ path: "./.env" });

const allowedOrigins = [
    "http://localhost:5173",
    "https://ai-powered-career-assistant-fronten-chi.vercel.app",
    ...(process.env.CLIENT_URL ? process.env.CLIENT_URL.split(",").map((origin) => origin.trim()) : [])
]

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true)
        }

        return callback(new Error("Not allowed by CORS"))
    },
    credentials: true
}))

/* require all the routes here */
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")


/* using all the routes here */
app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)



module.exports = app
