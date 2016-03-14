/**
 * Created by danyfu on 3/13/16.
 */

exports.showRequest = function(req, res, next){
    "use strict";
    //console.log(req.method, req.url);

    next();
};

exports.nameValidation = function(req, res, next, name){
    "use strict";
    /*
    * DOING VALIDATIONS
    * */

    console.log('doing some validations on ' + name);

    req.name = name;

    next();
};