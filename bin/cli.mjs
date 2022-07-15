#!/usr/bin/env node

import { execSync } from "child_process";
import { fileURLToPath } from "url";
import chalk from "chalk";
import path from "path";

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

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dirName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/eggfreitag/create-react-app-lite ${dirName}`;
const npmInstallCommand = `cd ${dirName} && npm install && rm -rf .github bin && git add .`;


// Create new create-react-app-lite
console.log(
  chalk.blueBright(`Creating a new React app in`),
  chalk.magentaBright.bold.italic.underline(
    `${path.resolve(process.cwd(), `../../../../${dirName}`)}`,
  ),
);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) {
  process.exit(1);
}

// Install dependencies
console.log(
  chalk.blueBright.bold(`Installing dependencies for`),
  chalk.redBright.bold(`${dirName}`),
);
const installedDeps = runCommand(npmInstallCommand);
if (!installedDeps) {
  process.exit(-1);
}

// Inform success and commands to start, build, test, prettier, and lint
console.log(
  "\n",
  chalk.greenBright.bold.underline(`Success!`),
  `Created`,
  chalk.redBright.bold(`${dirName}`),
  `at`,
  chalk.magentaBright.bold.italic.underline(
    `${path.resolve(__dirname, `../${dirName}`)}`,
  ),
  "\n\n",
  `Inside`,
  chalk.redBright.bold(`${dirName}`),
  `directory, you can run several`,
  chalk.blueBright.bold.underline(`commands`),
  `:`,
  "\n\n",
  chalk.yellowBright.bold("  npm start"),
  "\n",
  "    Starts the dev server",
  "\n\n",
  chalk.yellowBright.bold("  npm run build"),
  "\n",
  "    Bundles the app into static files for production",
  "\n\n",
  chalk.yellowBright.bold("  npm test"),
  "\n",
  "    Starts the test runner",
  "\n\n",
  chalk.yellowBright.bold("  npm run prettier"),
  "\n",
  `    This command format your code by`,
  chalk.underline(`${dirName}/config/prettier/.prettierrc.js`),
  "\n",
  `    It ignores folders and files from`,
  chalk.underline(`${dirName}/config/prettier/.prettierignore`),
  "\n\n",
  chalk.yellowBright.bold("  npm run lint"),
  "\n",
  `    This command find and fix problems in your code by`,
  chalk.underline(`${dirName}/config/eslint/.eslintrc.js`),
  "\n",
  `    It ignores folders and files from`,
  chalk.underline(`${dirName}/config/eslint/.eslintignore`),
  "\n\n",
  "We suggest that you begin by typing:",
  "\n\n",
  chalk.yellowBright.bold(`cd`),
  chalk.redBright.bold(`${dirName}`),
  "\n",
  chalk.yellowBright.bold("npm start"),
  "\n\n",
  chalk.cyanBright.bold("Enjoy it!"),
);
