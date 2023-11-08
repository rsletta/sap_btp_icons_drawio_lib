import { cp } from 'node:fs/promises';

async function main() {
  const path =  ENV['Title']
  core.setOutput("path", path);

}

main();
