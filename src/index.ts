#! /usr/bin/env node

import chalk from "chalk";

// @ts-ignore
// const figlet = require('figlet');
import figlet from "figlet";

// import method to create projects
import create from "./create";
import deposit from "./deposit";
import withdraw from "./withdraw";
import localnet from './localnet';
import help from "./help";
import confirmWithdraw from "./confirm-withdraw";
import zeek from "./zeek";

const availableOptions: string[] = [
  "create",
  "deposit",
  "withdraw",
  "localnet",
  "confirm-withdraw",
  "help",
];

// second argument should be the selected option
const option: string = process.argv[2];

const main = async () => {
  if (!availableOptions.includes(option)) {
    console.log(
      `Invalid operation. Available operations are: ${availableOptions}`
    );
    process.exit(-1);
  }

  // Starts CLI

  console.log(
    chalk.magentaBright(
      figlet.textSync(`zkSync ${option}`, { horizontalLayout: "full" })
    )
  );

  const zeekFlag = Boolean(process.argv.filter((arg) => arg === "--zeek")[0]);
  const l1RpcUrl = String(
    process.argv
      .filter((arg) => arg.startsWith("l1-rpc-url"))
      .map((arg) => arg.split("=")[1])[0]
  );
  const l2RpcUrl = String(
    process.argv
      .filter((arg) => arg.startsWith("l2-rpc-url"))
      .map((arg) => arg.split("=")[1])[0]
  );

  switch (option) {
    case "create":
      // arg 3 is the project name
      const projectName = process.argv[3] || ".";
      await create(projectName, zeekFlag);
      break;
    case "deposit":
      await deposit(zeekFlag, l1RpcUrl, l2RpcUrl);
      break;
    case "withdraw":
      await withdraw(zeekFlag, l1RpcUrl, l2RpcUrl);
      break;
    case "confirm-withdraw":
      await confirmWithdraw(zeekFlag, l1RpcUrl, l2RpcUrl);
      break;
    case 'localnet':
      const subcommandName = process.argv[3] || undefined;
      localnet(subcommandName);
      break;
    case "help":
      help();
      break;
  }

  if (zeekFlag) {
    await zeek();
  }

  process.exit(0);
};

main();
