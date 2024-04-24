import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

connectDB(); //Connect to DB

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.get("/",(req,res)=>{
    res.json("Success");
});

app.use("/api/products",productRoutes);


app.listen(port,()=>console.log("Running on port " + port));
