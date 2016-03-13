/**
 * Created by danyfu on 3/13/16.
 */
exports.showByName = function(req, res){
    "use strict";
    res.send('hello ' + req.params.name + ' !');
};