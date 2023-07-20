import mongoose from "mongoose";

const Connection = () =>{
    const MONGODB_URI = `mongodb+srv://todo_DB:inQgm5TcmXWeIGeh@asesometodo.69tnvuv.mongodb.net/?retryWrites=true&w=majority`;

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