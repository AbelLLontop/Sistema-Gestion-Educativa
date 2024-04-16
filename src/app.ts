import express, { NextFunction, Request, Response } from 'express';
import routes from './routes';

const app = express();
app.use(express.json());

app.use('/api',routes);



app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.status(500).send('Error in server');
});

export default app;
