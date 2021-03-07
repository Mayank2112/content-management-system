import { buildSchema } from 'graphql';

const author = buildSchema(`
  type post {
    title: String
    bannerImage: String
    content: String
    publish: String
    status: Int
    err: String
  }

  type Query {
    editPost( email: String, password: String ): post
  }
`);

export default author;
