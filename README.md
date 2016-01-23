# Hubistics

## Installation (dev mode)

 - `npm install`
 - `npm start`

### Build

 - `npm run build`

---

### .babelrc

.babelrc contain informations to transpile new javascript to a common javascript (like ecmascript 5) to be compatible with each browsers.

In this project, the presets used are :
- `react` to transpile the JSX syntax to javascript
- `es2015` to transpile ecmascript 6 to javascript
- `stage-0` to transpile ecmascript 7 and more to javascript
- `react-hmre` is used (in development mode) to enables hot reloading (using *Hot Module Replacement API*)

### .editorconfig

.editorconfig is used to force other developers to use the same basics syntax. For exemple, 2 spaces to indent. 

### .eslintrc

.eslintrc is the config file for the ecmascript linter; eslinter.
