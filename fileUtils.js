var fs = require('fs')
var path = require('path')
const fileUtils = {
    readFile: function (filename) {
        let data = fs.readFileSync(__dirname + filename, 'utf-8');
        return data
    },
    readFileSync (filename) {
        // 这里是异步读取文件
        fs.readFile(__dirname + '/datajson/datalist.json', function(err, data){
            if(err){
                console.log(err)
            }else{
                console.log(data)
            }
        })
    }

}


module.exports = fileUtils
