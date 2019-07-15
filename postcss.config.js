module.exports = {
  plugins: [
    require('autoprefixer'),
    // require('postcss-uncss')({
    //   html: ['index.html'],
    // }),
    require('cssnano')({
      preset: 'default',
    }),
  ],
  sourceMap: true
};
