import express from 'express';


import cors from 'cors';
import dotenv from 'dotenv';
import productsRouter from './routes/products.js';

dotenv.config();
const app = express();

app.use(cors({ origin: (o, cb) => cb(null, true), credentials: true }));
app.get('/health', (req, res) => res.json({ status: 'ok', ts: new Date().toISOString()}));
app.use('/api/products', productsRouter);

export default app;