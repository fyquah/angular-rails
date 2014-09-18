# Angularjs-Rails Template

This is using angularjs the run an api based service for rails and one-page-app with angular

# Things to note while bootstrapping

* Use this to obtain CSRF header for every request and configure appropriately

```javascript
tasksApp.config(["$httpProvider" , function($httpProvider){
    // adding csrf token
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')    
    // configuring for patch methods
    var defaults = $httpProvider.defaults.headers;
    defaults.patch = defaults.patch || {}
    defaults.patch["Content-Type"] = "application/json"
}]);

```

* `config/routes.rb` to checkout how templates are served:
* templates are stored in `/app/views/templates/`
* controllers which serve json data is stored in `/api/` namespace
* Follows convention in angularjs files


# Things to work on:

* html5Mode(true) routing methods
* Error 505 and 404 JSONs