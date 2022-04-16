const process = require("process");

const presets = [
  [
    "@babel/preset-env",
    {
      "targets": {
        "node": "current"
      }
    }
  ],
  [
    "@babel/react",
    {
      "targets": {
        "node": "current"
      }
    }
  ],
  [
    "next/babel",
    {
      "preset-react": {
        "runtime": "classic"
      }
    }
  ]
];

const plugins = [
  [
    "styled-components",
    {
      "ssr": true,
      "displayName": true,
      "fileName": false,
      "preprocess": false
    }
  ]
];

module.exports = { presets, plugins };
