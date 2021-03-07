import express from 'express';
import cors from 'cors';
import startConnection from './models';
import passportLibrary from './lib/passport';
import routes from './routes';

const env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line import/no-dynamic-require
const { server } = require(`../config/${env}`);

const app = express();
const { port } = server;

app.use(cors());

// setup for parsing data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// setup for passport module
passportLibrary.passportSetup(app);

// connect database
startConnection();

app.use('/', routes);

app.listen(port, () => console.log('Server is running on port ', port));
