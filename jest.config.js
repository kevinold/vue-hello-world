module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,vue}"],
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
};
