const mongoose= require('mongoose');
const connectDB=async(url)=>{
   return mongoose.connect(url,{
    useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true,
      //useFindAndModify:false
   })

}

module.exports=connectDB;