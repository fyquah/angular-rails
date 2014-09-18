$(document).on("page:load" , function(){
    $("[ng-app]").each(function(){
        module = $(this).attr('ng-app');
        angular.bootstrap(this, [module]);
    })
});

tasksApp = angular.module('tasksApp', ['ngResource' , "ngRoute"]);
tasksApp.run(["$rootScope" , function($rootScope){
    $rootScope.alert = {};
    ["success" , "danger" , "info"].forEach(function(prop){
        $rootScope.alert[prop] = [];
    })
}]);
