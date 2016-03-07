angular.module('mainapp')
.controller("cartSummaryController", function ($scope, cart) {
    
    $scope.cartData = cart.getProducts();
    $scope.cartdetail = [];
    var data = JSON.stringify($scope.cartData);

    $scope.orderdel = {SupID:'',CategoryID:'',ProductID:'',PaymantDetailsID:'',OrderID:'',CustomerID:''};


    //alert(data +' '+ $scope.cartData.length);
   
    $scope.total = function () {
        var total = 0;
        for (var i = 0; i < $scope.cartData.length; i++) {
            total += ($scope.cartData[i].UnitPrice * $scope.cartData[i].count);
            
        }
        return total;
    }
    $scope.remove = function (id) {
        cart.removeProduct(id);
    }
    $scope.totalcart = function () {
        for (var i = 0; i < $scope.cartData.length; i++) {
            $scope.orderdel.ProductID = $scope.cartData[i].ProductID;
            $scope.orderdel.ProductID = $scope.cartData[i].ProductID;
            $scope.cartdetail += $scope.cartData[i].ProductName + ','
            alert()
         
        }
      
    return $scope.cartdetail;
    }
   
  
    $scope.printDiv = function (divName) {
        var printContents = document.getElementById(divName).innerHTML;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }
});