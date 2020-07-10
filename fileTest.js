const fs = require('fs')

// fs.readFile('./package.json', function(err, data) {
//     if (err) {
//         throw err
//     }
//     console.log(data)
// })

// let data = fs.readFileSync('./package.json')
// console.log(data)

// 将readFile封装到一个Promise里
const readFile = filePath => new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => resolve(data))
})

// readFile('./package.json').then(res => {
//     console.log(res)
// })

async function handleFile() {
    const data = await readFile('./package.json')
    console.log(data)
}
// handleFile();

// fs.open('./README.md', 'r', function(err, fd) {
//     console.log(fd)

//     const buf = Buffer.alloc(1024)
//     const offseet = 0
//     // const len
//         fs.close(fd, () => {console.log('关闭')})

// })

// 打开文件并读取文件内容
// fs.open('./a.txt', 'r', function(err, fd) {
//     console.log(fd, '这里的fd只是文件标识符，不是文件内容')

//     const buf = Buffer.alloc(1024)
//     console.log(buf, 'buffer')
//     const offset = 0
//     const len = buf.length
//     const pos = 1
//     console.log(len, '读取的字节数')
//     fs.read(fd, buf, offset, len, pos, function(err, bytes, buffer) {
//         console.log('读取了', bytes, 'bytes')
//         console.log(err, '错误信息')
//         console.log(buffer, 'buffer')
//         console.log(buf.slice(0, bytes).toString())
//     })


//     fs.close(fd, () => {console.log('关闭')})
// })
// const data = 'adb'
// fs.writeFile('./b.txt', data, {
//     flag: 'w',
//     encoding: 'utf8'
// }, function(err, res) {
//     console.log('写入了', err, res)
// })

// 判断一个文件是不是png格式

// fs.open('./a.txt', 'r', function(err, fd) {
//     var header = new Buffer([137, 80, 78, 71, 13, 10, 26, 10])
//     var buf = new Buffer(8)
//     fs.read(fd, buf, 0, buf.length, 0, function(err, bytes, buffer) {
//         if (header.toString() === buffer.toString()) {
//             console.log('是png图片')
//         } else {
//             console.log('不是png格式哦')
//         }
//     })

// })

// 在文件后面追加内容
// fs.appendFile('./b.txt', 'Hello Beauty', {
//     encoding: 'utf8'
// }, function(err) {
//     console.log('done')
// })

const files = []
const walk = function(filePath) {
    fs.readdirSync(filePath).forEach(item => {
        console.log('item', item)
        const newPath = filePath + '/' + item
        const stats = fs.statSync(newPath);
        if (stats.isFile()) {
            if (/\.js/.test(item)) {
                files.push(item)
            }
        } else if (stats.isDirectory()) {
            walk(newPath)
        }
    })
}
walk('../node-server')
console.log(files.join('\r\n'))