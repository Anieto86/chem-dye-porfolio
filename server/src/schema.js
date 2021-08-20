const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    Blogs(id: ID): [Blog]
    Portfolios(id: ID): [Portfolio]
    Testimonials(id: ID): [Testimonial]
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

  type Portfolio {
    id: ID!
    name: String
    imagePath: String
  }

  type Testimonial {
    id: ID!
    name: String
    imagePath: String
    description: String
    role: String
  }
`;

module.exports = typeDefs;
