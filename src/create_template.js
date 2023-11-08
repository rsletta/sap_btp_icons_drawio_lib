import { appendFile, cp, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import {setOutput } from '@actions/core';
import {parse} from 'md-2-json'
/**
 *Json structure of pull request
 *  {
  Title: { raw: 'Principal Propagation\n\n\n' },
  Description: { raw: 'Example for principal propagation\n\n' },
  Image: { raw: '![Principal Propagation](./principalpropagation.png)' }
}
 */
async function main() {
  const body =  process.env.Body
  // const body = await readFile('./src/templates/principalpropagation/principalpropagation.md', 'utf-8')

const jsonBody = parse(body)

const templateName = jsonBody.Title.raw.replace(/\s/g, "")
const files = await readdir("./upload/", { withFileTypes: true, encoding: 'utf-8'})
const regex = /\.xml$/
if (files.length !== 1 || !regex.test(files[0].name)){
  throw new Error("File isn't uploaded into the upload directory or file is not XML")
} else {
  const filename = files[0].name

  await mkdir('./src/templates/test/')
  const path = './src/templates/test/' +templateName
  await mkdir(path)
  await cp('./upload/' +filename, path +"/" +filename)
    await writeFile(`${path}/${templateName}.md`,body)
  await appendFile(`${path}/${templateName}.md`, `\n\n
  [Open Diagram](https://app.diagrams.net/?create=https://raw.githubusercontent.com/${process.env.Repo}/${process.env.Branch}/src/templates/${templateName}/${filename}))`)
}
 

}



main();
