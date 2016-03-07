

angular.module('mainapp')
    .config(function ($httpProvider) {
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
    })
.controller('customerCtrl', function ($scope, $http) {
    $scope.customers = [];
    $scope.current = false;

    //Insert
    $scope.insert = function () {
        var newCustomer = angular.copy($scope.current);
        var val = JSON.stringify(newCustomer);
        alert(val)
        $http.post("http://saulhamid02-001-site1.ctempurl.com/odata/Customers/", val).success(function (data, stutes) {
            alert(stutes)
            $scope.customers.push(data);
            $scope.current = null;
        }).error(function (response) { });
        alert('fail')
    };
});