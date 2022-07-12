process.on("unhandledRejection", (err) => {
  throw err;
});

const jest = require("jest");
