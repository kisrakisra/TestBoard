angular.module('propService', [])
    .factory('Props', function ($http) {
        return {
            get: function () {
                return $http.get('/api/props');
            },
            create: function (appData) {
                return $http.post('/api/props', appData);
            },
            update: function (appName, appData) {
                return $http.update('/api/props/'+name, appData)
            },
            delete: function (id) {
                return $http.delete('/api/props/' + id);
            }
        }
    });