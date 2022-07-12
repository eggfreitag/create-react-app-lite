const fs = require("fs");
const path = require("path");

const env = fs.readFileSync(path.join(__dirname, "../../.env")).toString();
const envOption = {};

module.exports = envOption;
