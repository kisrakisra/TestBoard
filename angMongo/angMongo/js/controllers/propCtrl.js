angular.module('propController', [])
    .controller('propCtrl', function ($scope, $http) {
        $scope.appData = {};
        $scope.appName = "Elif's Todo List";
        //$http.get('/api/props')
        //    .success(function (data) {
        //        $scope.props = data;
        //    })
        //    .error(function (data) {
        //        console.log('Error: ' + data);
        //    });
        $http.get('/api/props')
            .success(function (data) {
                $scope.props = data;
            })
            .error(function (data, status, headers, config) {
                console.log('Error', data);
            });
        //$scope.createProp= function () {
        //    $http.post('/api/props', $scope.formData)
        //        .success(function (data) {
        //            $scope.formData = {};
        //            $scope.props = data;
        //        })
        //    .error(function (data) {
        //        console.log('Error: ' + data);
        //    });
        //};
        $scope.updateProp = function (appName) {
            $http.post('/api/props/' + appName, $scope.appData)
                .success(function (data) {
                    $scope.appData = {};
                    $scope.props = data;
                })
            .error(function (data) {
                console.log('Error: ' + data);
            });
        };

    });