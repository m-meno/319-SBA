//Imports 
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';
import offerRoutes from './routes/offerRoutes.mjs';
import requestRoutes from './routes/requestRoutes.mjs';
import userRoutes from './routes/userRoutes.mjs';
import { globalError } from './middleware/globalErrorHandling.mjs';
import Offer from './models/offerSchema.mjs';
import allOffers from './utilities/offerData.mjs';
import Request from './models/requestSchema.mjs';
import allRequests from './utilities/requestData.mjs';
import User from './models/userSchema.mjs';
import allUsers from './utilities/userData.mjs';


//Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.json());
connectDB();

//Routes
app.use('/offers', offerRoutes);
app.use('/requests', requestRoutes);
app.use('/users', userRoutes)

// app.get('/seed', async (req, res)=> {
//     await Offer.deleteMany({});
//     await Offer.create(allOffers);
//     await Request.deleteMany({});
//     await Request.create(allRequests);
//     await User.deleteMany({});
//     await User.create(allUsers);  
//     res.send('Database seeded.')
// });

//Error Handling Middleware
app.use(globalError);

//Listener
app.listen(PORT, ()=> {
    console.log(`Server connected on Port: ${PORT}.`)
});