const dotenv = require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const tasksRoutes = require("./routes/tasksRoutes.js")
const cors = require("cors")

const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin:["http://localhost:3000", "https://mern-task-app-fzer.onrender.com"]
}))
app.use("/api/tasks",tasksRoutes)


//routes
app.get("/", (req,res)=>{
    res.send("Home page")
})

const PORT = process.env.PORT || 5000

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(PORT, ()=>{
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((err)=>{
        console.log(err)
    })


