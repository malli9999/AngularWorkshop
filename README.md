<html>
<h1># AngularWorkshop</h1>
<body>
<ol>
Points Learned in today workshop 
1.Firstly Angular is a javascript (web) Frame work
2.It is used to develop single paged application 
3.The single page application are the which don't need to refresh all the time 
4. And in Angular everything is a module 
5. The things under the Module are 
6.Config
7.Filter 
8.Directive
9.Factory
10.Service
11.Provider
12.Value
13.Controller
</ol>
<p>
In the hand on with the Angular everything went good for me.


Coding part in Workshop
<!--->
<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular.min.js">

           </script>  
             <script src="app.js"></script>

       </Script>
    </head>
    <bod<y ng-app="myapp" ng-controller="myfirstcontroller">
        <h1>
            {{2+6}}
            </h1></t><input type="text" ng-model="test"/>
<h2>{{test}}</h2>
<h3>{{hello}}</h3>
<input type= "text"> 
    </body>
</html>


angular.module("myapp",[])
.controller("myfirstcontroller", ['$scope', function ($scope){
console.log("this is form controller")
$scope.hello= "Hello World";
}]);

-->
Finally it a good workshop and i learned something about Angular
Thanks to ACM.
</p>
</body>
</html>