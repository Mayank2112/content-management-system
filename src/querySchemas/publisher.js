import { buildSchema } from 'graphql';

const publisher = buildSchema(`
  type post {
    title: String
    bannerImage: String
    content: String
    publish: String
    status: Int
    err: String
  }

  type Query {
    publishAction( email: String, password: String ): post
  }
`);

export default publisher;
