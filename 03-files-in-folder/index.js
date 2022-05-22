const path = require('path');
const fs = require('fs');
const folderPath = path.join(__dirname, 'secret-folder')

fs.readdir(folderPath, (err, files) => {
for (let file of files) {
    fs.stat(`${folderPath}/${file}`, (err, stats) => {
        if (err) {
            throw err
        } else {
            if(stats.isFile()) {
                const fileName = path.parse(file).name
                let result = path.extname(file)
                result = result.replace('.', '')

                console.log(`${fileName}- ${result} - ${stats.size}`)
            }
        }
    })
}
})

