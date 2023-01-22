module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.png',
          '.ios.js',
          '.ios.jsx',
          '.android.js',
          '.android.jsx',
          '.js',
          '.jsx',
          '.ts',
          '.tsx'
        ],
        root: ['.'],
        alias: {
          '@src': './src'
        }
      }
    ]
  ]
};
