angular.module("myapp",[])
.controller("myfirstcontroller", ['$scope', function ($scope){
console.log("this is form controller")
$scope.hello= "Hello World";
}]);