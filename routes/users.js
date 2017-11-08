var express = require('express');
var router = express.Router();
var fileUtils = require('../fileUtils')

/* GET users listing. */
// router.get('/', function(req, res, next) {
    // 这里改成all是为了无论请求是get还是post都走这个方法
router.all('/', function(req, res, next) {
    let resObj = {
        success: true
    }
    let username=req.body.username;
    let password=req.body.password;
    let result
    if (!username) {
        resObj.success = false
        resObj.msg = '请输入用户名'
        res.errorCode = 3001
    }
    if (!password) {
        resObj.success = false
        resObj.msg = '请输入密码'
        res.errorCode = 3002
    }
    if (username && password) {
        let data = fileUtils.readFile('/datajson/users.json')
        data = JSON.parse(data)
        if(data.success) {
            let users = data.users
            result = users.find(ele => {
                return ele.username === username && ele.password === password
            })
            if (result) {
                resObj.success = true
                resObj.msg = '登录成功'
                resObj.token = 'rfrer3r2342432t'
            } else {
                resObj.success = false
                resObj.msg = '用户名或密码错误'
                res.errorCode = 3003
            }
        }
    }

    res.send(resObj)
})

router.all('/reset', function(req, res, next){
    console.log(req, 'reset')
    let resObj = {
        success: true
    }
    let username=req.body.username
    let password=req.body.password
    let newPassword = req.body.newPassword
    if (password !== newPassword) {
        resObj.success = false
        resObj.msg = '密码不一致'
        resObj.errorCode = 3004
    } else {
        // 修改密码
        let data = fileUtils.readFile('/datajson/users.json')
        data = JSON.parse(data)
        if(data.success) {
            let users = data.users
            let index //定义一个数字，用来确定当前用户是哪个
            result = users.find((ele, i) => {
                index = i
                return ele.username === username
            })
            if (result) {
                result.password = newPassword
                users[index] = result
                data.users = users
                // 这里没有返回失败或成功的信息，没法判断是失败还是成功，默认成功
                fileUtils.writeFile('/datajson/users.json', JSON.stringify(data))

                resObj.success = true
                resObj.msg = '密码修改成功'
            } else {
                resObj.success = false
                resObj.msg = '用户名不存在'
                res.errorCode = 3005
            }
        }
    }
    res.send(resObj)
})

router.all('/regist', function(req, res, next){
    console.log(req, 'reset')
    let resObj = {
        success: true
    }
    let username=req.body.username
    let password=req.body.password
    if (!password || !username) {
        resObj.success = false
        resObj.msg = '用户名或密码不能为空'
        resObj.errorCode = 3006
    } else {
        // 注册
        let data = fileUtils.readFile('/datajson/users.json')
        data = JSON.parse(data)
        if(data.success) {
            let users = data.users
            let newUser = {username: username, password: password}
            users.push(newUser)
            data.users = users
            // 这里没有返回失败或成功的信息，没法判断是失败还是成功，默认成功
            fileUtils.writeFile('/datajson/users.json', JSON.stringify(data))

            resObj.success = true
            resObj.msg = '注册成功'
        }
    }
    res.send(resObj)
})

module.exports = router;
