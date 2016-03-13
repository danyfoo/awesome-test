/**
 * Created by danyfu on 3/13/16.
 */

exports.showRequest = function(req, res, next){
    "use strict";
    console.log(req.method, req.url);

    next();
};