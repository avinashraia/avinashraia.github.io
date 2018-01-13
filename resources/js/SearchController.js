trainApp.controller("searchController",function($scope,$http)
                    {

    console.log("controller loaded");

    $scope.Train={};
    $scope.TrainArray=[];
    $scope.name=[];

    $scope.clear=function()
    {
        console.clear();
        console.log("cleared")
    }
    
    var failure=function(resp)
    {
        console.log("called failure")
        console.log(resp);

    }   

    $scope.searchNumber=function()
    {
        console.log("searched Number")

        var reqNumber={
            method:"GET",
            url:"https://api.railwayapi.com/v2/suggest-train/train/A/apikey/mjwwezui5l",

        };

        var successNumber=function(resp)
        {
            console.log("called success");
            console.log(resp);  
            console.log(resp.data); 
            console.log(resp.data.train); 
            $scope.num=resp.data.trains;

            angular.forEach($scope.num, function(value, key) {

                console.log("this is",value.number);
                $scope.name.push(value.number);

            });
            console.log($scope.name);

        }

        $http(reqNumber).then(successNumber,failure);

    }

    $scope.searchNumber();

    $scope.searchTime=function()
    {
        console.log("searched Time");
        console.log($scope.Train.searchNumber);

        var req={
            method:"GET",
            url:"https://api.railwayapi.com/v2/route/train/"+$scope.Train.searchNumber+"/apikey/mjwwezui5l/"};

        var successTime=function success(resp)
        {
            console.log("called success");
            console.log(resp);  
            console.log(resp.data); 
            console.log(resp.data.train); 
            console.log(resp.data.train.name); 
            console.log(resp.data.train.days);

            $scope.trainName=resp.data.train.name;
            $scope.trainNumber=resp.data.train.number;

            $scope.day=resp.data.train.days;
            $scope.route=resp.data.route;


        }

        $http(req).then(successTime,failure);
    }





    $scope.complete=function()
    {
        console.log("complete");
        $( "#tags" ).autocomplete({
            source: $scope.name
        });
    }


    console.log("controller ended");


});


