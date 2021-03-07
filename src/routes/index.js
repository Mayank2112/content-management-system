import { Router } from 'express';
import { graphqlHTTP } from 'express-graphql';
import passportLibrary from '../lib/passport';
import schema from '../querySchemas';
import roots from '../rootResolver';

const router = Router();

router.use('/author', passportLibrary.passport.authenticate('jwt-author', { session: false }), graphqlHTTP({
  schema: schema.author,
  rootValue: roots.author,
  graphiql: true
}));

router.use('/editor', passportLibrary.passport.authenticate('jwt-editor', { session: false }), graphqlHTTP({
  schema: schema.editor,
  rootValue: roots.editor,
  graphiql: true
}));

router.use('/publisher', passportLibrary.passport.authenticate('jwt-publisher', { session: false }), graphqlHTTP({
  schema: schema.publisher,
  rootValue: roots.publisher,
  graphiql: true
}));

router.use('/', graphqlHTTP({
  schema: schema.user,
  rootValue: roots.user,
  graphiql: true
}));

export default router;
