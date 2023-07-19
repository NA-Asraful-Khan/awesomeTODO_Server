import express from 'express'
import cors from 'cors'
import Connection from './database/db.js';

const app = express ();
app.use(cors());
const PORT= 8000;

Connection()

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}/`)
})

app.get('/',(req,res)=>{
    res.send('Welcome To the Server');
})