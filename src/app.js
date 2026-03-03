import express from 'express';


import cors from 'cors';
import dotenv from 'dotenv';
import productsRouter from './routes/products.js';
import filesRouter from './routes/files.js';

dotenv.config();
const app = express();

app.use(cors({ origin: (o, cb) => cb(null, true), credentials: true }));
app.get('/health', (req, res) => res.json({ status: 'ok', ts: new Date().toISOString()}));
app.use('/api/products', productsRouter);
app.use('/api/files', filesRouter);

export default app;