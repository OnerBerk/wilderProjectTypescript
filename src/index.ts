import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
// @ts-ignore
import connectDb from './config/config.database';

const cors = require('cors');
const mid = require('./error/error');

const app = express();
const PORT = process.env.PORT || 3000;
const wilderController = require('./controllers/controllers.wilder');

dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post('/api/wilder/create', mid.runAsyncWrapper(wilderController.create));
app.get('/api/wilders', mid.runAsyncWrapper(wilderController.getWilder));
app.put('/api/wilder/update', mid.runAsyncWrapper(wilderController.upDateWilder));
app.delete('/api/wilder/delete', wilderController.deleteWilder);

app.get('/', (req:Request, res:Response) => {
  res.send('projet Typescript node express mongo ESLINT');
});
app.get('*', (req: Request, res: Response) => {
  res.send('Rien a faire la Mon ami');
});

connectDb();
app.listen(PORT, () => { console.log(`Listenning on port ${PORT}`); });
