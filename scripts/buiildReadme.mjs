import fs from 'fs'
import chalk from 'chalk'
import path from 'path'

const files=fs.readdirSync(path.resolve('src/hand'))
let context=''
const header=`# JavaScript手撕代码 \n\n`
context+=header
let footer='\n'
files.forEach(file=>{
  const filename=file.slice(0,file.indexOf('.'))
  context+=`* [${filename}] \n`
  footer+=`[${filename}]:https://github.com/836334258/hand_code/blob/main/src/hand/${filename}.ts\n`
})

context+=footer

fs.writeFileSync(path.resolve('README.md'),context)

console.log(chalk.green('success!'))