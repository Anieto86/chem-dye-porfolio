const Blog = require("../models/Blog");

console.log(Blog);

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
  },
};

module.exports = resolvers;
