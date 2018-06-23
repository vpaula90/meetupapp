angular
.module('app.admin')
.controller('FormsController',function($scope, $firebaseArray, Notification){

    //Load firebase users into $scope;
    var ref = firebase.database().ref('forms');

    // To use with table (see .html)
    $scope.form = $firebaseArray(ref);

});
