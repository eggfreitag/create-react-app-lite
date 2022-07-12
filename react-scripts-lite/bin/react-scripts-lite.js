process.on("unhandledRejection", (err) => {
  throw err;
});

const spawnSync = require("child_process").spawnSync;
const path = require("path");

const args = process.argv.slice(2);
const scriptIndex = args.findIndex(
  (script) => script === "start" || script === "build" || script === "test"
);
const script = scriptIndex === -1 ? null : args[scriptIndex];

if (!script) {
  console.log("Command is not defined");
  process.exit(1);
}

const result = spawnSync("node", [`react-scripts-lite/scripts/${script}.js`]);
