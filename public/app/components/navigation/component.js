angular
.module('app')
.component('navigation', {
    controller: 'NavigationController',
    templateUrl: '/app/components/navigation/template.html',
    bindToController: true //required for $scope to work
})
.controller('NavigationController',function($scope, UserFactory){
    $scope.user = UserFactory;
});
