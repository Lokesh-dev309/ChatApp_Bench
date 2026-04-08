module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // other plugins
      "react-native-reanimated/plugin", // ✅ keep this
      // ❌ removed: "react-native-worklets/plugin"
    ],
  };
};
