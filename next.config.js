const { isStyledComponent } = require("styled-components");

/** @type {import('next').NextCOnfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "standalone",
  isStyledComponent: true,
};

module.exports = nextConfig;
