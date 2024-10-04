
<!DOCTYPE html>

<html>

<head>

<title>
API Example
</title>

</head>

<body>

<div ng-app="serviceApp" ng-controller="serviceCtrl">

<p>Hi, Guest</p>

<h1>Details: {{Details}}</h1>

<h1>Error: {{ResponseDetails}}</h1>
</div>

	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.6/angular.min.js"></script>
	</body>

</html>

////////////////////js
//Insert code below

var app = angular.module('serviceApp', []);

app.controller('serviceCtrl', function ($scope, $http) {
	
	$http.get('/http://covid19.adcindiainnovation.com/global_overall_count')
            .success(function (data, status, headers, config) {
                $scope.Details = data;
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data ;
            });

// $http({

// method: 'GET',
 
// url: 'http://covid19.adcindiainnovation.com/global_overall_count'

// }).then(function success(response) {
// console.log(response);
// $scope.count = response.count;

// $scope.date = response.date;



// }, function error(response) {
// console.log(response);
// });

});

