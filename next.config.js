const withImages = require('next-images');
module.exports = withImages({
  webpack(config, options) {
    return config;
  },
});

module.exports = {
  images: {
    domains: ['www.peintureshazardsamin.com', 'res.cloudinary.com'],
  },
};
