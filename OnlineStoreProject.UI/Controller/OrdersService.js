/// <reference path="H:\OnlineStoreProject.UI\OnlineStoreProject.UI\Scripts/angular.js" />
angular.module('mainapp')
.service("OrderService", function ($scope) {
    this.orders = []
    this.AddOrder = function (neworder) {
        this.orders = neworder;
    }
    this.getOrder = function () {
        return this.orders;
    }
 
})
