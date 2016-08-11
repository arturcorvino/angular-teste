angular.module("sistemaFinanceiro").controller("sistemaFinanceiroCtrl", function ($scope, $http) {
	$scope.app = "Sistema Financeiro";

	$scope.entries = [
		{id: 1, type: {id: 1, title:"Depósito"}, value: 43.25},
		{id: 2, type: {id: 1, title:"Depósito"}, value: 1258.2},
		{id: 3, type: {id: 2, title:"Saque"}, value: 452.0},
		{id: 4, type: {id: 2, title:"Saque"}, value: 9.75},
	];

	$scope.types = [
		{id: 1, title: "Depósito"},
		{id: 2, title: "Saque"}
	];

	$scope.addEntry = function (entry) {
		$scope.entries.push(angular.copy(entry));
		$scope.getTotal;
	};

	$scope.removeEntry = function (entry) {
		var index = $scope.entries.indexOf(entry);
		$scope.entries.splice(index, 1);
		$scope.getTotal;
	};

	$scope.getTotal = function() {
		var totalInput = 0;
		var totalOutput = 0;
		var total = 0;

		for(var i = 0; i < $scope.entries.length; i++) {
			var entry = $scope.entries[i];
			if (entry.type.id == 1) {
				totalInput += entry.value;
			} else if (entry.type.id == 2) {
				totalOutput += entry.value;
			}
		}

		total = totalInput - totalOutput;

		return "$ "+total;
	}

	$scope.orderBy = function (campo) {
		$scope.orderCriteria = campo;
		$scope.directionOrder = !$scope.directionOrder;
	};

});