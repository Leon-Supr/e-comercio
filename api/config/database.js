import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI); // se conecta mediante la uri de mongo

mongoose.connection.on('open', ()=>{
    console.log("Database connection correct");
    
});

mongoose.connection.on('disconnected', ()=>{
    console.log("Database disconnected");
});