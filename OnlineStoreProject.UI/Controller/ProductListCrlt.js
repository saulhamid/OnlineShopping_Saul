/// <reference path="J:\OnlineStoreProject.UI\OnlineStoreProject.UI\Scripts/angular.js" />
angular.module('mainapp')
    .constant("productListActiveClass", "btn-primary")
  .controller("productListCtrl", function ($scope, $filter, cart, productListActiveClass) {
      $scope.currentProduct = null;
      var selectedCategory = null;
      $scope.selectCategory = function (newCategory) {
        
          selectedCategory = newCategory;
      }
      $scope.productdetail = function (product) {
          selectedCategory = product.ProductCategories.Category
          $scope.currentProduct = product || null;
        
      }
      $scope.categoryFilterFn = function (product) {
          return selectedCategory == null ||
          product.ProductCategories.Category == selectedCategory;
         
      }

      $scope.getCategoryClass = function (item) {
        
          return selectedCategory == item.Category ? productListActiveClass : "";
      }
      $scope.search = function (item) {
      alert('done')
        alert(item.ProductName)
          if ($scope.searchText == undefined) {
              return true;
          }
          else {
              if (item.ProductName.toLowerCase()
                           .indexOf($scope.searchText.toLowerCase()) != -1 ||
                  item.ProductCategories.Category.toLowerCase()
                           .indexOf($scope.searchText.toLowerCase()) != -1) {
                  return true;
              }
          }
          return false;
      }
      
   
      $scope.addProductToCart = function (product) {
          
          cart.addProduct(product.ProductID, product.ProductName, product.UnitPrice, product.size || 'Medium');
      }
   
  });




    