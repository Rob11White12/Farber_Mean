angular.module('jobService', []).factory('job', ['$http', function($http) {

    return {
        // call to get all jobs
        get : function() {
            return $http.get('/api/jobs');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new job
        create : function(nerdData) {
            return $http.post('/api/jobs', emrgencyData);
        },

        // call to DELETE a job
        delete : function(id) {
            return $http.delete('/api/jobs/' + id);
        }
    }       

}]);