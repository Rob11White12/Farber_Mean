var emergency = require('./models/emergency');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/emergency', function(req, res) {
            // use mongoose to get all nerds in the database
            emergency.find(function(err, emergency) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(emergency); // return all nerds in JSON format
            });
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('/public/views/index.html'); // load our public/index.html file
        });
        
        angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {


                // home page
                .when('/', {
                    templateUrl: 'views/home.html',
                    controller: 'MainController'
                })

                // nerds page that will use the NerdController
                .when('/jobs', {
                    templateUrl: 'views/job.html',
                    controller: 'jobController'
                });

            $locationProvider.html5Mode(true);

        }]);

    };

