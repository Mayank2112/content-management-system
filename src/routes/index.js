import { Router } from 'express';
// const { registerUserType } = require('../controllers/adminController');
// const { passport } = require('../lib/passport');
import { graphqlHTTP } from 'express-graphql';
import userSchema from '../querySchemas/userSchemas';
import userRoots from '../rootResolver/userRoots';

const router = Router();

router.use('/', graphqlHTTP({
  schema: userSchema,
  rootValue: userRoots,
  graphiql: true
}));

export default router;
