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

    basicRouter.route('/login')
        .get(function(req, res){
            res.send('This is The login Form');
        })

        .post(function(req, res){
            console.log('Processing');
            res.send('Processing the login Form!');
        });

    return basicRouter;
};
