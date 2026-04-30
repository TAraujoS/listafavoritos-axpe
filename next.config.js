const path = require("path");
const webpack = require("webpack");
const fs = require("fs");

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nodeEnv = process.env.NODE_ENV || "development";

let envConfig = {};
try {
  envConfig = JSON.parse(fs.readFileSync(`./config/${nodeEnv}.json`, "utf-8"));
} catch (e) {
  console.warn("Config não encontrada, usando vazio");
}

const nextConfig = {
  swcMinify: true,
  compress: true,

  async redirects() {
    return [
      {
        source: "/cadastrar",
        destination: "/",
        permanent: true,
      },
    ];
  },

  images: {
    unoptimized: true,
    domains: [
      "admin.axpe.com.br",
      "images.axpe.com.br",
      "axpe.com.br",
      "www-hml.axpe.com.br",
      "axpe-frontend.vercel.app",
    ],
    formats: ["image/avif", "image/webp"],
  },

  compiler: {
    styledComponents: true,
  },

  async headers() {
    return [
      {
        source: "/static/:all*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, immutable",
          },
        ],
      },
    ];
  },

  webpack(config, { dev, isServer }) {
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: "all",
          maxInitialRequests: 25,
          minSize: 20000,
        },
      };
    }

    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/i,
      type: "asset",
      parser: {
        dataUrlCondition: {
          maxSize: 100000,
        },
      },
      generator: {
        filename: "static/chunks/[name].[hash][ext]",
      },
    });

    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.config": JSON.stringify(envConfig),
      }),
    );

    // aliases seguros (SEM pages)
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      assets: path.resolve(process.cwd(), "src/assets"),
      components: path.resolve(process.cwd(), "src/components"),
      helpers: path.resolve(process.cwd(), "src/helpers"),
      layouts: path.resolve(process.cwd(), "src/layouts"),
      services: path.resolve(process.cwd(), "src/services"),
      store: path.resolve(process.cwd(), "src/store"),
    };

    return config;
  },
};

const pwa = withPWA({
  dest: "public",
  disable: nodeEnv === "development",
  runtimeCaching,
  buildExcludes: [/middleware-manifest\.json$/],
});

module.exports = withBundleAnalyzer(pwa(nextConfig));
