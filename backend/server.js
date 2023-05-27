import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
dotenv.config();
const port = process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js';
import connectDB from "./config/db.js";

connectDB(); 
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api/users', userRoutes);

app.get('/', (req,res) => res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler); 
app.listen(port, ()=> console.log(`Server started on port ${port}`));

