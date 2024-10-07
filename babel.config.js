module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }, 'nativewind']
    ],
    plugins: [
      "react-native-reanimated/plugin",
      "@babel/plugin-proposal-export-namespace-from",
    ],
  }
}
