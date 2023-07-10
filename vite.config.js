module.exports = {
  root: "src",
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/styles/variables.scss";
        @import "./src/styles/mixins.scss";
      `,
      },
    },
  },
};
