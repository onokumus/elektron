
module.exports = () => ({
  map: {
    inline: false,
    annotation: true,
    sourcesContent: true,
  },
  plugins: {
    autoprefixer: {
      cascade: false,
    },
    "postcss-preset-env": {
      stage: 0,
      features: {
        'nesting-rules': true
      }
    }
  }
});
