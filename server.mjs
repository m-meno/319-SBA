//Imports 
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';
import offerRoutes from './routes/offerRoutes.mjs'


//Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.json());
connectDB();

//Routes
app.use('/offers', offerRoutes);

//Error Handling Middleware

//Listener
app.listen(PORT, ()=> {
    console.log(`Server connected on Port: ${PORT}.`)
});