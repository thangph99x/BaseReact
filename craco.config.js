const path = require("path");
const { ESLINT_MODES } = require("@craco/craco");

module.exports = {
  reactScriptsVersion: "react-scripts",
  style: {
    sass: {
      loaderOptions: {
        sassOptions: {
          includePaths: ["node_modules", "src/assets"]
        }
      }
    },
    postcss: {
      plugins: [require("postcss-rtl")()]
    }
  },
  eslint: {
    mode: ESLINT_MODES.file
  },
  webpack: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/@core/assets"),
      "@components": path.resolve(__dirname, "src/@core/components"),
      "@layouts": path.resolve(__dirname, "src/@core/layouts"),
      "@store": path.resolve(__dirname, "src/redux"),
      "@styles": path.resolve(__dirname, "src/@core/scss"),
      "@configs": path.resolve(__dirname, "src/configs"),
      "@utils": path.resolve(__dirname, "src/utility/Utils"),
      "@hooks": path.resolve(__dirname, "src/utility/hooks"),
      "@services": path.resolve(__dirname, "src/services"),
      "@modules": path.resolve(__dirname, "src/modules"),
    }
  }
};
