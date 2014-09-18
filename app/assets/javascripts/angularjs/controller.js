tasksApp.controller("tasksCtrl" , [ "$scope" , "$http" , function($scope , $http){
    (function(){
        $http.get("/api/tasks.json").
        success(function(data){
            $scope.tasks = data;
        }).
        error(function(){
            alert("an unidentified error occured");
        });
    })();

    $scope.delete = function(index){
        var task_to_be_removed = $scope.tasks.splice(index , 1)[0];
        $http({
            method: "DELETE",
            url: "api/tasks/" + task_to_be_removed.id + ".json"
        }).
        success(function(data){
            console.log(data);
            console.log("removed successfully");
        }).
        error(function(data){
            console.log(data);
            console.log("An err occured");
        })
    };
}]).

controller("addTaskCtrl" , [ "$scope" , "$http" , "$window" , function($scope , $http , $window){
    $scope.new_task = {};

    $scope.submit = function(){
        console.log("submitting form");
        var new_task = {
            "task" : $scope.new_task
        };
        $http.post("/api/tasks.json" , new_task).
        success(function(data , a , b, c){
            $scope.notification = "created task with the credentials " + data;
            console.log(a);
            console.log(b);
            console.log(c);
        }).
        error(function(data , a , b , c){
            console.log(a);
            console.log(b);
            console.log(c);
            console.log(data);
        });
    }
}])

.controller("viewTaskCtrl" , ["$scope" , "$http" , "$routeParams" ,function($scope , $http , $routeParams){
    (function(){
        $scope.task = {};
        $http.get("api/tasks/" + $routeParams.id + ".json").
        success(function(data){
            $scope.task = data;
        }).
        error(function(data){
            console.log(data);
        })
    })();

    $scope.update = function(){
        var obj = {
            task: $scope.task,
            authenticity_token: $("meta[name=\"csrf-token\"]").attr("content")            
        }
        console.log("updating stuff");
        $http({
            method: "PATCH",
            url: "/api/tasks/" + $scope.task.id + ".json",
            data: obj
        }).
        success(function(data){
            console.log(data);
        }).
        error(function(data){
            console.log(data);
        })
    }
}]);