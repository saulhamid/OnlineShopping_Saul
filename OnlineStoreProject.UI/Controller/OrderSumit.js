angular.module('mainapp')
    .config(function ($httpProvider) {
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
    })
.controller("OrderSubmit", function ($scope,$http,cart) {
    $scope.cartData = cart.getProducts();
    $scope.orderDetail = {};
    $scope.data = JSON.stringify($scope.cartData);
    alert(JSON.stringify($scope.cartData))

   
   var date = new Date()
   var customerid = localStorage.getItem('custid')
   alert(customerid);
   var invoiceid = localStorage.getItem('invoceid')
    alert(invoiceid)
   $scope.orderDetail = {
       InvoiceID:'', OrderItems: '',
       OrderDate: '', OrderQty:'', ProductSize: 'x',
       OrderAmount: '',
       ProductID: '', PaymantDetailsID: '1', CustomerID: ''
   }

   for (var i = 0; i < $scope.cartData.length; i++) {
       var datacount = $scope.cartData[i].count;
       var datapro = $scope.cartData[i].ProductName;
       var datauni = $scope.cartData[i].UnitPrice;
       var dataproid = $scope.cartData[i].ProductID;
       var size = $scope.cartData[i].size
       $scope.orderDetail = {
           InvoiceID: invoiceid, OrderItems: datapro,
           OrderDate: date, OrderQty: datacount, ProductSize: size,
           OrderAmount: datauni,
           ProductID: dataproid, PaymantDetailsID: '1', CustomerID: customerid
       }
       var val = JSON.stringify($scope.orderDetail)
       $http.post("http://localhost:2124/odata/OrderDetails/", val).success(function (data) {
           alert('success');
       }).error(function (response) {
           alert('fail')
       });
       alert(val);
   }
   $scope.Submitorder = function () {
       var val = JSON.stringify($scope.orderDetail)
       $http.post("http://localhost:2124/odata/OrderDetails/", val).success(function (data) {
           alert('success');
       }).error(function (response) {
           alert('fail')
       });
   }
    
   
});