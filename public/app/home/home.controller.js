angular
.module('app.home')
.controller('HomeController', function($scope, $firebaseArray, Notification){

  var ref = firebase.database().ref('newsletter');
  $scope.newsletterlist= $firebaseArray(ref);

  $scope.newsletter = {
    name:'',
    email:''
  }

  $scope.submit = function(){
    ref.push($scope.newsletter);
    $scope.newsletter ={}
    Notification.success({message:"Success"})
  }


  var ref = firebase.database().ref('forms');
  $scope.orderform= $firebaseArray(ref);

  $scope.forms = {}

  $scope.submit = function(){
    ref.push($scope.forms);
    $scope.forms ={}
    Notification.success({message:"Success"})
  }



});
