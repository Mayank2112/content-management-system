import { buildSchema } from 'graphql';

const author = buildSchema(`
  type user {
    name: String
    email: String
    role: String
    err: String
  }

  type loginSuccessfull {
    token: String
    err: String
  }

  type Query {
    registration( name: String, email: String, password: String, role: String ): user
    login(email: String, password: String): loginSuccessfull
  }
`);

export default author;
