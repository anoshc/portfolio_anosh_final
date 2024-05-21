/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  basePath: isProd ? "/portfolio_anosh_final" : "",
  assetPrefix: isProd ? "/portfolio_anosh_final/" : "",
};

export default nextConfig;
