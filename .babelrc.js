module.exports = {
  "env": {
    "development": {
      "presets": ["next/babel"],
      "plugins": [["transform-define"]]
    },
    "production": {
      "presets": ["next/babel"],
      "plugins": [["transform-define"]]
    },
    "test": {
      "presets": [["next/babel", { "preset-env": { "modules": "commonjs" } }]],
      "plugins": [["transform-define"]]
    }
  }
}