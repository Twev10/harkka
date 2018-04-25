var express = require('express');
var router = express.Router();


var ankka_controller = require('../controllers/ankkacontroller');
var color_controller = require('../controllers/colorcontroller');



router.get('/', ankka_controller.index);

router.get('/ankka/:id', ankka_controller.ankka_detail);

router.get('/ankat', ankka_controller.ankka_list);




router.get('/color/:id', color_controller.color_detail);
router.get('/colors', color_controller.color_list);


module.exports = router;