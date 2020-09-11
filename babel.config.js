module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
//   plugins: [
//     ['import', {
//       libraryName: 'vant',
//       libraryDirectory: 'es',
//       style: true
//     }, 'vant'],
//   "transform-vue-jsx",
//   "transform-runtime",
//   ["component",
//   {
//   "libraryName":"mint-ui",
//   "style": true
//   }
// ]
// ]

  "plugins": ["@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-class-properties",
    ["component",
      {
        "libraryName": "mint-ui",
        "style": true
      }
    ]]
}
