const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    getBlogs: [Blog]
  }

  type Blog {
    id: ID!
    title: String
    imagePath: String
    subTitle: String
    link: String
    likes: Int
    views: Int
  }
`;

module.exports = typeDefs;
