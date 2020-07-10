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

const readDir = filePath => new Promise((resolve, reject) => {
    fs.readdir(filePath, (err, data) => resolve(data))
})
const readFile = filePath => new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => resolve(data))
})
// 寻找目录下所有的json文件
// const filesArr = []
const walk = async (filePath, filesArr) => {
    // 根据路径找到下面所有的json文件
    const fileDirs = await readDir(filePath)
    for(let file of fileDirs) {
        const newPath = filePath + '/' + file
        const stats = fs.statSync(newPath)

        if (stats.isFile() && /(.*)\.(json)/.test(file)) {
            filesArr.push(newPath)
        } else if (stats.isDirectory()) {
            await walk(newPath, filesArr)
        }
    }
}

const mergeFileData = async () => {
    let filesArr = []
    await walk(rootPath, filesArr)
    // console.log(filesArr, '文件列表')
    // 将文件列表里的文件内容都读取出来
    const finalData = {}
    for(let filePath of filesArr) {
        const json = await readFile(filePath);
        const basename = path.basename(filePath, '.json')
        let fileJson
        try {
            fileJson = JSON.parse(json)
        } catch (error) {
            console.log('json文件转换失败', err)
        }
        finalData[basename] = fileJson
    }
    fs.writeFileSync('./data.json', JSON.stringify(finalData, null, 2))
    // console.log('写入完毕')
}
mergeFileData()