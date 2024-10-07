const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

// 1. Enable CSS for Expo.
const config = getDefaultConfig(__dirname);

// 2. Enable NativeWind
module.exports = withNativeWind(config, {
  input: "./src/styles/global.css",
});