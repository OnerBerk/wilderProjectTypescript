import express,{Request,Response}  from "express";

const app = express();
const PORT = process.env.PORT || 3000

app.get('/',(req:Request, res:Response)=>{
res.send("projet Typescript node express mongo ESLINT")
})

app.listen(PORT,()=>{console.log(`Listenning on port ${PORT}`)})