import express from "express"
import productRoutes from "./routes/products/index"

const app=express();

const port=process.env.PORT || 4000

app.use("/api/products",productRoutes)



app.listen(port,()=>{
    console.log("server  running on :",port);
    
})