import express from 'express';
import products from './products.js';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 3000;
const app = express();

app.get("/",(req,res)=>{
    res.json("Success");
});

app.get("/api/products",(req,res)=>{
    res.json(products);
});

app.get("/api/product/:id",(req,res) =>{
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});


app.listen(port,()=>console.log("Running on port " + port));