//Imports 
import express from `express`;
import dotenv from `dotenv`;


//Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.json());
connectDB();

//Routes

//Error Handling Middleware

//Listener
app.listen(PORT, ()=> {
    console.log(`Server connected on Port: ${PORT}.`)
});