import express from "express";

const app = express();
app.use("/api/auth", authRoutes)
app.listen( 8000 ,()=>{
    console.log("server is running on port 8000")
})