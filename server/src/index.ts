import express from 'express';
import cors from 'cors';

import data from './data';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/products', (request, response) => {
  response.status(200).json(data);
});

app.listen(3000, () => {
  console.log('Server started on PORT: 3000');
});

export default app;
