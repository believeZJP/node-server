var express = require('express');
var router = express.Router();

/* GET dataList listing. */
router.get('/', function(req, res, next) {
    var dataList = {
        "success": true,
        "data": {
          "projects": [
            {
              "name": "演示用",
              "url": "gopher://cmcory.tk/bomvf",
              "email": "u.kikbeu@xxaegji.cd",
              "address": "四川省 巴中市 通江县",
              "string": "★★★★★★★★★",
              "number": 29,
              "boolean": false,
              "object": {
                "310000": "上海市",
                "320000": "江苏省"
              }
            },
            {
              "name": "演示用",
              "url": "mid://ywfioxa.nr/ziio",
              "email": "e.sbtsznwo@mevfyefyn.mh",
              "address": "湖北省 随州市 广水市",
              "string": "★★★★★★★★",
              "number": 86,
              "boolean": false,
              "object": {
                "310000": "上海市",
                "330000": "浙江省"
              }
            },
            {
              "name": "演示用",
              "url": "prospero://cotwt.af/etololyfh",
              "email": "q.etcnrsf@ydqsje.ae",
              "address": "江西省 抚州市 崇仁县",
              "string": "★★",
              "number": 10,
              "boolean": false,
              "object": {
                "310000": "上海市",
                "320000": "江苏省"
              }
            },
            {
              "name": "演示用",
              "url": "tn3270://rnqq.gi/sleiqffli",
              "email": "d.osev@lktpee.nl",
              "address": "浙江省 嘉兴市 海宁市",
              "string": "★★★★",
              "number": 15,
              "boolean": false,
              "object": {
                "310000": "上海市",
                "330000": "浙江省"
              }
            },
            {
              "name": "演示用",
              "url": "tn3270://nqxtq.pm/jmny",
              "email": "i.wqqe@rnggwqqjx.ge",
              "address": "河南省 漯河市 舞阳县",
              "string": "★★★★★★★★★★",
              "number": 62,
              "boolean": false,
              "object": {
                "310000": "上海市",
                "330000": "浙江省"
              }
            },
            {
              "name": "演示用",
              "url": "cid://alqnuawho.hm/tnyhdjmdi",
              "email": "u.qhces@jxxcfmus.mo",
              "address": "河北省 邢台市 巨鹿县",
              "string": "★★★★★★★",
              "number": 46,
              "boolean": false,
              "object": {
                "320000": "江苏省",
                "330000": "浙江省"
              }
            }
          ]
        }
      }
    res.send(dataList);
});

// 添加
router.post('/add', function (req, res, next) {
	var body = req.body
	var name = body.name
	var url = body.url
	var email = body.email
	var address = body.address
	var string = body.string
	var number = body.number
	var boolean = body.boolean
	var object = body.object
	


})

module.exports = router;
