const packageJson = ({ name }) => `{
      "name": "${name}",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "format": "prettier --check ./src",
        "format:fix": "prettier --write ./src",
        "dev": "webpack server --mode development --open --hot",
        "build": "webpack --mode production",
        "prestart": "cross-env NODE_ENV=production npm run build",
        "start": "webpack --mode development"
      },
      "author": "jessi68",
      "license": "ISC",
      "dependencies": {
        "@babel/preset-typescript": "^7.16.7",
      "@types/react": "^17.0.43",
      "@types/react-dom": "^17.0.14",
      "babel-loader": "^8.2.4",
      "react": "^17.0.2",
      "react-dom": "^17.0.2",
      "webpack": "^5.70.0"
      },
      "devDependencies": {
        "@babel/preset-env": "^7.16.11",
      "@babel/preset-react": "^7.16.7",
        "eslint": "^8.12.0",
        "eslint-config-prettier": "^8.5.0",
        "eslint-plugin-prettier": "^4.0.0",
        "html-webpack-plugin": "^5.5.0",
        "prettier": "2.6.1",
        "webpack-cli": "^4.9.2",
        "webpack-dev-server": "^4.7.4"
      }
  }`;

  module.exports = packageJson;