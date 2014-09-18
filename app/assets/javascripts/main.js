$(document).on("page:load" , function(){
    $("[ng-app]").each(function(){
        module = $(this).attr('ng-app');
        angular.bootstrap(this, [module]);
    })
});

tasksApp = angular.module('tasksApp', ['ngResource' , "ngRoute"]);

tasksApp.config(["$httpProvider" , function($httpProvider){
    // adding csrf token
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')    
    // configuring for patch methods
    var defaults = $httpProvider.defaults.headers;
    defaults.patch = defaults.patch || {}
    defaults.patch["Content-Type"] = "application/json"
}]);

tasksApp.config([ "$routeProvider", "$locationProvider" , function($routeProvider , $locationProvider){
    $locationProvider.html5Mode(false);
    $routeProvider.when("/" , {
        controller: "tasksCtrl",
        templateUrl: "/templates/tasks.html"
    }).
    when("/tasks/new" , {
        controller: "addTaskCtrl",
        templateUrl: "/templates/addTask.html"
    }).
    when("/tasks/:id" , {
        controller: "viewTaskCtrl",
        templateUrl: "/templates/viewTask.html"
    }).
    otherwise({
        redirectTo: "/"
    })
}]);