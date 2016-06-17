var routeForm = angular.module('routeForm', []);

var model = {};

routeForm.run(function($http) {
    $http.get("https://shvilws1.herokuapp.com/getSegments").success(function(data){
        console.log(data);
        var placeJson = '[';
        for(var i = 0; i<6; i++)
        {
            placeJson += '{ "place": "' + data[i].seg_start + '", "id" :' + (i+1) + '},';
            if(i==5) {
                 placeJson += '{ "place": "' + data[i].seg_end + '", "id" :' + (i+2) + '},';  
            }
        }
        placeJson = placeJson.substring(0, placeJson.length-1);
        placeJson += ']';
        console.log(placeJson);
        var parsedPlaces = JSON.parse(placeJson);
        model.listPlace = parsedPlaces;
        //console.log(model.list);
    });
});

routeForm.controller('routecontroller', ['$scope','$http', function($scope, $http){
    $scope.list = model;
    
    $scope.sendDetails = function(){
        var sd = $scope.sDate;
        var ed = $scope.eDate;
        var sp = $scope.sPoint;
        var dr = $scope.dir;
        var df = $scope.diff;

        //var sDayString = numToString(sDay);
        var sDay = sd.getDate();
        var sDayString = sDay.toString(); 
        if(sDay<10) { 
            sDayString = "0" + sDayString;
        }

        var sMonth = sd.getMonth();
        sMonth = sMonth+1;
        var sMonthString = sMonth.toString(); 
        if(sMonth<10) { 
            sMonthString = "0" + sMonthString;
        }

        var sYear = sd.getFullYear();

        var sDate = sDayString + '.' + sMonthString + '.' + sYear;

        var eDay = ed.getDate();
        var eDayString = eDay.toString(); 
        if(eDay<10) { 
            eDayString = "0" + eDayString;
        }

        var eMonth = ed.getMonth();
        eMonth = eMonth+1;
        var eMonthString = eMonth.toString(); 
        if(eMonth<10) { 
            eMonthString = "0" + eMonthString;
        }

        var eYear = ed.getFullYear();

        var eDate = eDayString + '.' + eMonthString + '.' + eYear;
        
        /*function numToString(num){
            var str = num.toString();
            if(num<10) { 
                str = "0" + str;
                return str;
            } else return str;
        }*/
        
        var url = "https://shvilws1.herokuapp.com/calculate/" + sDate +"/" + eDate + "/" + sp 
        +"/" + dr +"/" + df;
        $http.get(url).success(function(data){
            console.log("hi");
            window.location.assign("http://localhost:8080/route.html");
        });
    };
}]);
