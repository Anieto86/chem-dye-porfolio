const Blog = require("../models/Blog");
const Portfolio = require("../models/Portfolio");
const Testimonials = require("../models/Testimonials");

const resolvers = {
  Query: {
    getBlogs: async () => {
      try {
        const blogs = await Blog.find();
        return blogs;
      } catch (error) {
        throw new Error(error);
      }
    },
    getPortfolio: async () => {
      try {
        const portfolio = await Portfolio.find();
        return portfolio;
      } catch (error) {
        throw new Error(error);
      }
    },

    getTestimonials: async () => {
      try {
        const testimonials = await Testimonials.find();
        return testimonials;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

module.exports = resolvers;
