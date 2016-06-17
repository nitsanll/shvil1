var route = angular.module('route', []);

var model = {};
var model2 = {};

route.run(function($http) {
    $http.get("https://shvilws1.herokuapp.com/getTravelerRoute").success(function(data){
        //console.log(data);
        model.segments = data[0].segments;
        model.start = data[0].start_date;
        model.end = data[0].end_date;
        
        var sDateArr = (model.start).split(".");
        var sDateString = sDateArr[1] + '/' + sDateArr[0] + '/' + sDateArr[2];
        var sDate = new Date(sDateString);
        //console.log(sDate);
       
		var eDateArr = (model.end).split(".");
        var eDateString = eDateArr[1] + '/' + eDateArr[0] + '/' + eDateArr[2];
        var eDate = new Date(eDateString);
        //console.log(eDate);

        var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        var diffDays = Math.round(Math.abs((sDate.getTime() - eDate.getTime())/(oneDay)));
        diffDays+=1;
        //console.log(diffDays);

        var daysArr = [];
        var changeDate = sDate;
        for(var i = 0; i<diffDays; ++i)
        {
        	var day = changeDate.getDate();
	        var month = changeDate.getMonth();
	        month = month+1; 
	        var year = changeDate.getFullYear();
        	var date = day + '.' + month + '.' + year;
        	//console.log(date);
        	daysArr[i] = date;
        	changeDate.setDate(sDate.getDate()+1);
        }
        model2.dates = daysArr;
    });
});

route.controller('segmentscontroller', function($scope){
    $scope.segs = model;
	$scope.datesArr = model2;
});
