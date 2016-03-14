/**
 * Created by danyfu on 3/13/16.
 */
//Importing Controllers
var usersCtrl = require('../controllers/users');

//Importing Middlewares
var adminMiddlewares = require('../middlewares/adminMiddleware');

module.exports = function(app, express){
    "use strict";
    var adminRouter = express.Router();

    //Middlewares
    //adminRouter.use(adminMiddlewares.showRequest);

    adminRouter.get('/', function(req, res){
        "use strict";
        res.send('I am the dashboard');
    });

    //Routes to handle Users
    adminRouter.get('/users', function(req, res){
        "use strict";
        res.send('I show all the users!');
    });
    adminRouter.param('name', adminMiddlewares.nameValidation); //This function we can validate, parse or change the parameters
    adminRouter.route('/users/:name')
        .get(usersCtrl.showByName);

    adminRouter.get('/posts', function(req, res){
        "use strict";
        res.send('I show all the post!');
    });

    return adminRouter;
};
