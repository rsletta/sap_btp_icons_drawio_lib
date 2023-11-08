import { appendFile, cp, mkdir, readFile, readdir, writeFile, rm } from 'node:fs/promises';
import {setOutput } from '@actions/core';
import {parse, toMd} from 'md-2-json'
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
  try {
  const filename = files[0].name
  const path = './src/templates/' +templateName
  const mdFilePath = `templates/${templateName}/${templateName}.md`
  await mkdir(path)
  await cp('./upload/' +filename, path +"/" +filename)
    await writeFile(mdFilePath,body)
  await appendFile(mdFilePath, `\n\n
  [Open Diagram](https://app.diagrams.net/?create=https://raw.githubusercontent.com/${process.env.Repo}/main/src/templates/${templateName}/${filename})`)
  await rm('./upload/' +filename)
  const summary = await readFile('./src/SUMMARY.md', 'utf-8')
  let summaryBody = parse(summary)
  summaryBody.Templates.raw += `- [${jsonBody.Title.raw}](${mdFilePath})\n`
  await writeFile('./src/SUMMARY.md', toMd(summaryBody))

  }
  catch (e) {
    console.log(e)
    throw new Error('Something went wrong!')
  }
}
 

}



main();
