import { connect, connection } from 'mongoose';

const env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line import/no-dynamic-require
const { database } = require(`../../config/${env}`);

/**
 * Connect to database
 */
const startConnection = () => {
  connect(database, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });
  const db = connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });
};

export default startConnection;
