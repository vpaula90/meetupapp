angular
.module('app')
.component('paula', {
    controller: 'PaulaController',
    templateUrl: '/app/components/paula/template.html',
    bindToController: true //required for $scope to work
})
.controller('PaulaController',function($scope, UserFactory){
    $scope.user = UserFactory;
});
