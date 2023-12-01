module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "~/api": "./src/api",
          "~/assets": "./src/assets",
          "~/components": "./src/components",
          "~/hooks": "./src/hooks",
          "~/screens": "./src/screens",
          "~/store": "./src/store",
          "~/types": "./src/types",
          "~/utils": "./src/utils",
          "~/Router": "./src/Router",
        },
      },
    ],
    "nativewind/babel",
  ],
};
