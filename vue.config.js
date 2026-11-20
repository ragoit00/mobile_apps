const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: "0.0.0.0", // Allows the server to be accessed from other devices
    port: 8080, // You can change the port if needed
    allowedHosts: "all", // Optional: Allows access from any host (useful in complex networks)
  },
});
