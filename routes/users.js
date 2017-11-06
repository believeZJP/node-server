var express = require('express');
var router = express.Router();
var fileUtils = require('../fileUtils')
debugger
/* GET users listing. */
// router.get('/', function(req, res, next) {
    // 这里改成all是为了无论请求是get还是post都走这个方法
router.all('/', function(req, res, next) {
    /* let user = [
        {username: 'fadsf', tel: 234242},
        {username: 'farwerdsf', tel: 2342423442},
        {username: 'farwerdsf', tel: 234534242}
    ] */
    let data = fileUtils.readFile('/datajson/users.json')
    res.send(data);
})

router.all('/login', function(req, res, next){
    console.log(req, 'login')
})

module.exports = router;
