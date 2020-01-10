require("dotenv").config();
module.exports = {
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};
