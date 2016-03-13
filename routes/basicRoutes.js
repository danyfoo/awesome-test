/**
 * Created by danyfu on 3/13/16.
 */
var basicMiddlewares = require('../middlewares/basicMiddleware');

module.exports = function(app, express){
    "use strict";
    var basicRouter = express.Router();
    
    //Middlewares
    basicRouter.use(basicMiddlewares.showRequest);

    basicRouter.get('/pokemon', function(req, res){
        "use strict";
        res.sendFile('/public/pokemon.html');
    });

    return basicRouter;
};
