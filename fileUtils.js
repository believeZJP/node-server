var fs = require('fs')
var path = require('path')
const fileUtils = {
    readFile: function (filename) {
        let data = fs.readFileSync(__dirname + filename, 'utf-8');
        return data
    },
    readFileSync (filename) {
        // 这里是异步读取文件
        fs.readFile(__dirname + filename, function(err, data){
            if(err){
                console.log(err)
                return err
            }else{
                console.log(data)
                return data
            }
        })
    },
    writeFile (filename, data) {
        let res = fs.writeFile(__dirname + filename, data)
        return res
        if(res) {
            return err
        } else {
            return {success: true}
        }
    },
    writeFileSync(filename, data) {
        fs.writeFileSync(__dirname + filename, data, function(err){
            if(err) {
                return err
            } else {
                return {success: true}
            }
        })
    }

}


module.exports = fileUtils
