#!/usr/bin/env node

const execSync = require("child_process").execSync;
const path = require("path");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });

    return true;
  } catch (err) {
    console.log(`Failed to run ${command}`);
    console.log(err);

    return false;
  }
};

const dirName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/eggfreitag/create-react-app-lite ${dirName}`;
const npmInstallCommand = `cd ${dirName} && npm install`;

console.log(`Creating a new React app in ${path.resolve(__dirname, dirName)}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) {
  process.exit(1);
}

console.log(`Installing dependencies for ${dirName}`);
const installedDeps = runCommand(npmInstallCommand);
if (!installedDeps) {
  process.exit(-1);
}

console.log(
  "\n",
  `Success! Created ${dirName} at ${path.resolve(__dirname, dirName)}`,
  "Here, you can run several commands:",
  "\n",
  "  npm start",
  "\n",
  "    Starts the dev server.",
  "\n\n",
  "  npm run build",
  "\n",
  "    Bundles the app into static files for production.",
  "\n\n",
  "  npm test",
  "\n",
  "    Starts the test runner",
  "\n\n",
  "  npm run prettier",
  "\n",
  "    This command format your code by /config/prettier/.prettierrc.js",
  "    It ignores folders and files from /config/prettier/.prettierignore",
  "\n\n",
  "  npm run lint",
  "\n",
  "    This command find and fix problems in your code by /config/eslint/.eslintrc.js",
  "    It ignores folders and files from /config/eslint/.eslintignore",
  "\n\n",
  "Enjoy it!"
);
