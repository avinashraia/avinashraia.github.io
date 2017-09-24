var trainApp=angular.module("trainModule",['ngRoute']);

trainApp.config(
    
    function($routeProvider)
           {
                console.log("Loaded route provider");
    
                $routeProvider.when("/",{templateUrl:"/home.html"})
                  .when("/home",{templateUrl:"/home.html"})
                  .when("/search",{templateUrl:"/search.html"})
                  .when("/searched",{templateUrl:"/searched.html"})
                  .when("/about",{templateUrl:"/about.html" })
               
               console.log("ended route provider");
}

);