"use strict";

var app = angular.module('raptorApp')
	.controller('MainCtrl', function ($scope) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
	});


app.directive('editable', function(){
		return {
			restrict: 'E',
			templateUrl:"views/hello.html"
		};
	});