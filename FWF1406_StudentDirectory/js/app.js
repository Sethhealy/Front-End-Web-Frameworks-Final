var dataArray=[];

angular.module("MyStudents",["ngRoute"])

.config(function($routeProvider){

       $routeProvider
       .when("/list",{
       controller:"HomeController",
       templateUrl:"list.html"
       })
       .when("/details/:index",{
       controller:"DetailController",
       templateUrl:"details.html"
       })
       .otherwise({redirectTo:"/list"});
})

.controller("HomeController",function($scope,$http){


        $http.jsonp("http://wddbs.com/ffw/jsapi/students.php?callback=JSON_CALLBACK")

        .success(function(data){
        dataArray= data;

        $scope.dataArray=dataArray;
            
        }).error(function(data){
        console.log("wrong data");
        });
})
.controller("DetailController",function($scope,$routeParams){

        console.log(dataArray);
        $scope.current = dataArray[$routeParams.index];    
    
        });