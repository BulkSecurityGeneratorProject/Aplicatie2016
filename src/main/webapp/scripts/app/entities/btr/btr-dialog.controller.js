'use strict';

angular.module('btravelappApp').controller('BtrDialogController',
    ['$scope', '$stateParams', '$uibModalInstance', 'entity', 'Btr', 'User', 'Expense',
        function($scope, $stateParams, $uibModalInstance, entity, Btr, User, Expense) {

    	//AM INCERCAT DE AICI SA PREIAU USER-UL CARE FACE BTR-UL
    	//$meteor.autorun($scope, function(){
    	//    var user = (Meteor.users.find({_id: Meteor.userId()}).fetch())[0];
    	//    if( user != null ){
    	//        $scope.me = user;
    	//    }
    	//}); 	
    	
        $scope.btr = entity;
        $scope.users = User.query();
        console.log($scope.users); //////
        
        $scope.expenses = Expense.query();
        $scope.load = function(id) {
            Btr.get({id : id}, function(result) {
                $scope.btr = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('btravelappApp:btrUpdate', result);
            $uibModalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.btr.id != null) {
                Btr.update($scope.btr, onSaveSuccess, onSaveError);
            } else {
                Btr.save($scope.btr, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
        $scope.datePickerForStart_date = {};

        $scope.datePickerForStart_date.status = {
            opened: false
        };

        $scope.datePickerForStart_dateOpen = function($event) {
            $scope.datePickerForStart_date.status.opened = true;
        };
        $scope.datePickerForEnd_date = {};

        $scope.datePickerForEnd_date.status = {
            opened: false
        };

        $scope.datePickerForEnd_dateOpen = function($event) {
            $scope.datePickerForEnd_date.status.opened = true;
        };
        $scope.datePickerForRequest_date = {};

        $scope.datePickerForRequest_date.status = {
            opened: false
        };

        $scope.datePickerForRequest_dateOpen = function($event) {
            $scope.datePickerForRequest_date.status.opened = true;
        };
        $scope.datePickerForLast_modified_date = {};

        $scope.datePickerForLast_modified_date.status = {
            opened: false
        };

        $scope.datePickerForLast_modified_dateOpen = function($event) {
            $scope.datePickerForLast_modified_date.status.opened = true;
        };
}]);
