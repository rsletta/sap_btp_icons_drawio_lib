import { cp } from 'node:fs/promises';

async function main() {
  const path =  process.env.Title
  core.setOutput("path", path);

}

main();
