/**
 * Created by danyfu on 3/13/16.
 */
var apiMiddlewares = require('../middlewares/adminMiddleware');

module.exports = function(app, express){
    "use strict";
    var apiRouter = express.Router();

    //Middlewares
    apiRouter.use(apiMiddlewares.showRequest);

    apiRouter.get('/', function(req, res){
        "use strict";
        res.send('Estas en la API');
    });

    return apiRouter;
};
