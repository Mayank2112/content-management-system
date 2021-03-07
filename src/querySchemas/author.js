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
    createPost( title: String, bannerImage: String, content: String ): post
    update( email: String, password: String ): post
  }
`);

export default author;
