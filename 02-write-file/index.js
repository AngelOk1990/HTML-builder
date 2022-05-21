const process = require('process')
const fs = require('fs')
const path = require('path')
const { stdin, stdout, exit} = require('process')

const textPath = path.join(__dirname, 'text.txt')
const writeStream = fs.createWriteStream(textPath)
stdout.write('Пожалуйста введите текст\n')
stdin.on('data', data => { 
const text = data.toString().trim()
 if(text === 'exit') {
    stdout.write('Процесс завершен, до свидания!\n')
    exit()
 } else {
writeStream.write(data)}
 })

process.on('SIGINT', () => {
    stdout.write('Процесс завершен, до свидания!\n')
    exit()
})