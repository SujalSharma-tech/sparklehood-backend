import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import incidentRoutes from './src/routes/AppRoutes';
import { errorHandler } from './src/utils/errorHandler';

const app: Express = express();


app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.use('/incidents', incidentRoutes);


app.get('/', (req: Request, res: Response) => {
  res.send('AI Safety Incident Log API');
});


app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
  });
});

app.use(errorHandler);

export default app;