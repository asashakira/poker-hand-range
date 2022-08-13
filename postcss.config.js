module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 0,
      browsers: ['last 2 versions', 'iOS 12'],
      features: {
        'nesting-rules': true,
      },
    }),
  ],
}
