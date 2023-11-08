import { cp } from 'node:fs/promises';
const core = require('@actions/core');

async function main() {
  const path =  process.env.Title
  core.setOutput("path", path);

}

main();
