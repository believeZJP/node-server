var express = require('express');
var router = express.Router();
var fileUtils = require('../fileUtils')

/* GET users listing. */
router.get('/', function(req, res, next) {
    /* let user = [
        {username: 'fadsf', tel: 234242},
        {username: 'farwerdsf', tel: 2342423442},
        {username: 'farwerdsf', tel: 234534242}
    ] */
    let data = fileUtils.readFile('/datajson/datalist.json')
    // res.send('respond with a resource');
    res.send(data);
});

module.exports = router;
