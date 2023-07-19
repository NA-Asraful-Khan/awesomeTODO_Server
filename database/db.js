import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const Connection = () =>{
    const MONGODB_URI = process.env.DB_URL;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected',()=>{
        console.log('Database connected Succesfully')
    })
    mongoose.connection.on('disconnected',()=>{
        console.log('Database Disconnected')
    })
    mongoose.connection.on('error',(error)=>{
        console.log('Error', error.message)
    })
}

export default Connection;