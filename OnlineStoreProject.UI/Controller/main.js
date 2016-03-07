
angular.module("mainapp", ["ngRoute","cart"])
       .config(function ($routeProvider) {
           $routeProvider.when("/index", {
               templateUrl: "/Index.html"
           });
           $routeProvider.when("/ProductDetail", {
               templateUrl: "/View/ProductDetail.html"
           });
           $routeProvider.when("/search", {
               templateUrl: "/View/SearchView.html"
           });
           $routeProvider.when("/checkout", {
               templateUrl: "/View/checkoutSummary.html"
           });
           $routeProvider.when("/products", {
               templateUrl: "/View/ProductView.html"
           });
         
           $routeProvider.when("/placeorder", {
               templateUrl: "/View/placeOrder.html"
           });
           $routeProvider.when("/register", {
               templateUrl: "/View/Customers.html"
           });
           $routeProvider.when("/ordersubmit", {
               templateUrl: "/View/OrderSubmit.html"
           });

           $routeProvider.otherwise({
               templateUrl: "/View/ProductView.html"
           });
       })
.controller('productCrlt', function ($scope, $http) {
    $http.get('http://saulhamid02-001-site1.ctempurl.com/odata/Products?$expand=ProductCategories').success(function (data) {
        $scope.productlist = data.value;
        }).error(function (data) {
            alert(data)
        })
    $http.get('http://saulhamid02-001-site1.ctempurl.com/odata/ProductCategories').success(function (data) {
            $scope.productCategory = data.value;
        }).error(function (data) {
            alert(data)
        })
    $http.get('http://saulhamid02-001-site1.ctempurl.com/odata/Products?$expand=ProductCategories&$top=10').success(function (data) {
        $scope.producttop10 = data.value
    }).error(function (data) {
        alert(data)
    });
    $http.get('http://saulhamid02-001-site1.ctempurl.com/odata/OrderDetails?$orderby=InvoiceID%20desc&$select=InvoiceID&$top=1').success(function (data) {
        $scope.Invoicelast = data.value;
        var invoiceid = Number($scope.Invoicelast[0].InvoiceID) + 1
        localStorage.setItem('invoceid', invoiceid)
    }).error(function (data) {
        alert(data)
    });
    }
)
