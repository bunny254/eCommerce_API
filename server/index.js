require('dotenv').config();
const express=require('express');
const app=express();
const port=process.env.PORT;
const connectDB=require('./db/connectDB');
const pageNotFound=require('./middleware/pageNotFound');

//middleware
app.use(express.json())

//routes
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to Our Ecommerce's API</h1>")
})

app.use(pageNotFound);

//start server
const start= async ()=>{
    try {
        connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`App is Listening on port ${port}...`);
        })        
    } catch (error) {
        console.log(error);        
    }
}

start()

