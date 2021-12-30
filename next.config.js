const withTM = require("next-transpile-modules")(["react-timezone-select"])
module.exports = withTM({
    reactStrictMode: true,
})