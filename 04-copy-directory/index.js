const path = require('path')
const fs = require('fs')
const fsPromises = fs.promises;


fs.mkdir(path.join(__dirname, 'files-copy'), {recursive: true}, (err) => {
    if (err) throw err
})

const copyFolder = path.join(__dirname, 'files-copy')
const filesFolder = path.join(__dirname, 'files')

fs.readdir(filesFolder, (err, files) => {
    for(let file of files) {
        fs.copyFile(`${filesFolder}/${file}`, `${copyFolder}/${file}`, (err) => {
            if (err) throw err
    });
    }
})

fs.readdir(copyFolder, (err, copies) => {
    for(let copy of copies) {
        const pathForCopy = path.join(filesFolder, copy)
        const pathOfCopy = path.join(copyFolder, copy)
        fs.stat(pathForCopy, (err, stats) => {
            if (err) {
                fs.unlink(pathOfCopy, function (err) {
                    if(err) return console.error(err)
                })
            }
        })
    }
})
