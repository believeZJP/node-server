/**
 * @file: file
 * @author: zhaojianpeng
 */

const fs = require('fs')
const path =require('path')
// 从命令行里获取文件路径
const jsonPath = process.argv[2]

if (!jsonPath) {
    process.exit(1)
}
const rootPath = path.join(process.cwd(), jsonPath)

// 寻找目录下所有的json文件
// const filesArr = []
const walk = function(filePath, filesArr) {
    // 根据路径找到下面所有的json文件
    fs.readdirSync(filePath).forEach(file => {
        const newPath = filePath + '/' + file
        const stats = fs.statSync(newPath)

        if (stats.isFile() && /(.*)\.(json)/.test(file)) {
            filesArr.push(newPath)
        } else if (stats.isDirectory()) {
            walk(newPath, filesArr)
        }
    })
}

const mergeFileData = () => {
    let filesArr = []
    walk(rootPath, filesArr)
    // 将文件列表里的文件内容都读取出来
    const finalData = filesArr.reduce((total, filePath) => {
        const json = fs.readFileSync(filePath);
        const basename = path.basename(filePath, '.json')
        let fileJson
        try {
            fileJson = JSON.parse(json)
        } catch (error) {
            console.log('json文件转换失败', err)
        }
        total[basename] = fileJson
        return total
    }, {})
    fs.writeFileSync('./data.json', JSON.stringify(finalData, null, 2))
    console.log('写入完毕')
}
mergeFileData()