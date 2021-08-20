const Blog = require("../models/Blog");
const Portfolio = require("../models/Portfolio");
const Testimonial = require("../models/Testimonial");

const resolvers = {
  Query: {
    Blogs: async (_, { id }, context, info) => {
      try {
        const blog = await Blog.find(id);
        return blog;
      } catch (error) {
        throw new Error(error);
      }
    },
    Portfolios: async (_, { id }, context, info) => {
      try {
        const portfolio = await Portfolio.find(id);
        return portfolio;
      } catch (error) {
        throw new Error(error);
      }
    },
    Testimonials: async (_, { id }, context, info) => {
      try {
        const testimonial = await Testimonial.find(id);
        return testimonial;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

module.exports = resolvers;
