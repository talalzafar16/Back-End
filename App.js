const express =require('express');
const app=express();
const PORT= process.env.PORT || 4000;
const cors=require("cors");
const mongoose= require('mongoose');
const router  = require('./routers');
const DBURI = "mongodb+srv://admin:admin@cluster0.1inwtck.mongodb.net/?retryWrites=true&w=majority";

//Connecting db
mongoose.connect(DBURI).then((res) =>console.log("mongo DB connected")).catch((err) =>console.log("DBerr",err))          

app.use(cors())     //cross origin
app.use(express.json());   //body parser read body middlesman
app.use(router)        //All routes

app.listen(PORT, () =>console.log(`Your server is runing on http://localhost:${PORT}`));