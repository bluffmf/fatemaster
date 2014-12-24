var navigationControllers = angular.module('navigationControllers', []);


var NavCtrl = function ($scope, $location) {

    $scope.isActive = function(path) {
        return path === $location.path();
    };


};



navigationControllers.controller('NavCtrl', NavCtrl);