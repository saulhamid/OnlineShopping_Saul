angular.module("mainapp")
.controller("authCtrl", function ($scope, $http, $location) {
    $scope.customerInfo = [];
    $scope.login = true;
    $scope.logouts = false;
    $http.get("http://saulhamid02-001-site1.ctempurl.com/odata/Customers").success(function (data) {
        $scope.customerInfo = data.value;
    })
    $scope.authenticate = function (username, password) {
       
            for (i = 0; i < $scope.customerInfo.length; i++) {
               
                if (username == $scope.customerInfo[i].CustomerEmail && password == $scope.customerInfo[i].CustomerPassword) {
                    localStorage.setItem('custid', $scope.customerInfo[i].CustomerID);
                    localStorage.setItem('CustomerName', $scope.customerInfo[i].CustomerName);
                    localStorage.setItem('username', username);
                    localStorage.setItem('userpass', password);
                    $location.path("/");
                }
            }
            $scope.login = false;
           
            alert(localStorage.getItem('CustomerName'))
    }
    $scope.usernames = localStorage.getItem('username');
    $scope.userpass = localStorage.getItem('userpass');
    $scope.CustomerName = localStorage.getItem('CustomerName');

    $scope.logout = function () {

        $scope.login = true;
        alert($scope.login)
        localStorage.removeItem('username');
        localStorage.removeItem('CustomerName');
        alert(localStorage.getItem('CustomerName'))
        $location.path("/");
    }
    return $scope.customerid;
});
