let Color = require('../models/color');

exports.color_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Color list');
}

exports.color_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Color detail: ' + req.params.id);
};
