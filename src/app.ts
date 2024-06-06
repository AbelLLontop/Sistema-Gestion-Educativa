import express from 'express';
import routes from './routes';
import { errorHandler } from './handlers/error.handler';
import cors from 'cors';
const app = express();
app.use(cors())
app.use(express.json());

app.use('/api', routes);

app.use(errorHandler);

export default app;
