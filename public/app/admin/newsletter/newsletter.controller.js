angular
.module('app.admin')
.controller('NewsletterController',function($scope, $firebaseArray, Notification){


    // To use with table (see .html)
    $scope.mode = 'list';


    $scope.pets = [
      {name:'Bella'},
      {name:'Khal'}
    ];

    Notification.success({message:"hi"});

    var ref = firebase.database().ref('newsletter');

    $scope.newsletter = $firebaseArray(ref);

//delete
    $scope.remove = function(id)
    {
        //Get the index of the user to remove
        var index = $scope.pets.$indexFor(id);

        $scope.pets.$remove(index);
    }

});
