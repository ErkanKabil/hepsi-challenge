const nextConfig = {
  reactStrictMode: true,
  performance: true,
  devtool: "source-map",
  splitChunks: {
    chunks: "all",
  },
  experimental: {
    esmExternals: "loose",
    styledComponents: true
  },
  webpack(cfg) {
    cfg.module.rules.push({
      test: /\.svg$/,
      issuer: [/\.(js|ts)x?$/],
      use: [{
        loader: "@svgr/webpack",
        options: {
          svgoConfig: {
            plugins: [
              {
                name: "removeViewBox",
                active: false,
              },
            ],
          },
        },
      }],

    });
    return cfg;
  },
}

module.exports = nextConfig
