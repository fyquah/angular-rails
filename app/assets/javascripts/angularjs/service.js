angular.module("tasksApp").factory("Task" , function(){
    var Task = function(obj){
        this.name = obj.name;
        this.description = obj.description;
    }

    // Instace methods
    Task.method("create" , function(){

    });

    Task.method("delete" , function(){

    });

    Task.method("update" , function(){

    });

    // Constructor methods
    Task.get = function(id){
        // query
        return this.new();
    }

    Task.all = function(){
        var tasks = []; //some angular query
        return tasks;
    }

    return Task;
})