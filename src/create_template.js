import { cp } from 'node:fs/promises';
import {setOutput } from '@actions/core';

async function main() {
  const path =  process.env.Title
  setOutput("path", path);

}

main();
