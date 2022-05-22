const path = require('path')
const fs = require('fs')

const pathBundle = path.join(__dirname, 'project-dist')
const styles = path.join(__dirname, 'styles')


fs.open(`${pathBundle}/bundle.css`, 'w', (err) => {
    if (err) throw err;
    console.log('File was build successfully');
})


fs.readdir(styles, (err, files) => {
    if (err) throw err
    for(let file of files) {
     const filePath = path.join(styles, file)
    fs.lstat(filePath, (err, stats) => {
        if (err) console.error(err)

        if (stats.isFile()== true && path.extname(file) == '.css') {
    fs.readFile(`${styles}/${file}`, "utf-8",
    function (error, data) {
        if (error) throw error
        fs.appendFile(`${pathBundle}/bundle.css`, data, err => {
            if (err) throw err
        }
        )
    })
        }
    })

    }

    
})

