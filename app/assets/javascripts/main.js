$(document).on("page:load" , function(){
    $("[ng-app]").each(function(){
        module = $(this).attr('ng-app');
        angular.bootstrap(this, [module]);
    })
});

tasksApp = angular.module('tasksApp', ['ngResource' , "ngRoute"]);

tasksApp.config(function($httpProvider){
    var auth_token = $("meta[name=\"csrf-token\"]").attr("content");
    console.log("authtoken is " + auth_token);
    $httpProvider.defaults.headers.common["X-CSSF-TOKEN"] = auth_token;
    
    var defaults = $httpProvider.defaults.headers;
    defaults.patch = defaults.patch || {}
    defaults.patch["Content-Type"] = "application/json"
});

tasksApp.config([ "$routeProvider", "$locationProvider" , function($routeProvider , $locationProvider){
    $locationProvider.html5Mode(false);
    $routeProvider.when("/" , {
        controller: "tasksCtrl",
        templateUrl: "/templates/tasks.html"
    }).
    when("/tasks/:id" , {
        controller: "viewTaskCtrl",
        templateUrl: "/templates/viewTask.html"
    }).
    when("/tasks/new" , {
        controller: "addTaskCtrl",
        templateUrl: "/templates/addTask.html"
    }).
    otherwise({
        redirectTo: "/"
    })
}]);