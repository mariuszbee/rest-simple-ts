import express, { Request, Response, NextFunction } from 'express';

import tdoRoutes from './routes/todos';

const app = express();

app.use('/todos', tdoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  req;
  res.json({ message: err.message });
  next();
});

app.listen(3000);

app.get('/', (_, res) => {
  res.send('<h1>Hello World</h1>');
});
