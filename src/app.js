import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import authRoutesTasks from './routes/tasks.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(cors({
	origin: 'http://localhost:5173', //solo en este dominio se podra comunicar el backend
	credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());	
app.use(cookieParser());
app.use('/api', authRoutes);
app.use('/api', authRoutesTasks);


export default app;