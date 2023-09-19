module.exports = {
  content: [
    "./*.js",
    "./screens/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],

  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
