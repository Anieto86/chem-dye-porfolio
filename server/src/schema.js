const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    getBlogs: [Blog]
    getPortfolio: [Portfolio]
    getTestimonials: [Testimonials]
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
    imagePath: String
    name: String
  }

  type Testimonials {
    Id: ID
    name: String
    imagePath: String
    description: String
    role: String
  }
`;

module.exports = typeDefs;
