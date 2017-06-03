angular.module('quoteBook').controller('mainCtrl', function($scope, dataService) {
	var getQuotes = dataService.getQuotes;
	$scope.quotes = getQuotes();

	var addData = dataService.addData;
	$scope.addData = addData;

	var removeData = dataService.removeData;
	$scope.removeData = removeData;

})