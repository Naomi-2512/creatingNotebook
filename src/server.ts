import express,{ NextFunction, Request, Response } from "express";

const app = express();

app.use((err:Error, req:Request,res:Response,next:NextFunction)=>{
    res.json({
        message:err.message
    })
})
let PORT = 5204

app.listen(5204, ()=>{
    console.log(`server is running on port ${PORT}`);
})