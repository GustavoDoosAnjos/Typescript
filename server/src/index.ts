import express, { Request, Response } from 'express';
import { router } from './routes/loginRoute';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['akihabara'] }));
app.use(router);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
