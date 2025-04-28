//Imports 
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';
import offerRoutes from './routes/offerRoutes.mjs';
import requestRoutes from './routes/requestRoutes.mjs';
import { globalError } from './middleware/globalErrorHandling.mjs';
import Offer from './models/offerSchema.mjs';
import allOffers from './utilities/offerData.mjs';
import Request from './models/requestSchema.mjs';
import allRequests from './utilities/requestData.mjs';


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

// app.get('/seed', async (req, res)=> {
//     await Offer.deleteMany({});
//     await Offer.create(allOffers);
//     await Request.deleteMany({});
//     await Request.create(allOffers); 
//     res.send('Database seeded.')
// });

//Error Handling Middleware
app.use(globalError);

//Listener
app.listen(PORT, ()=> {
    console.log(`Server connected on Port: ${PORT}.`)
});