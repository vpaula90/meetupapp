angular
.module('app')
.component('userLogin',{
    controller: 'UserController',
    templateUrl: '/app/components/user/template.html',
    bindToController: true //required for $scope to work
})
.controller('UserController', function($scope, UserFactory){

    $scope.login = function(type)
    {
        UserFactory.login(type);
    }

})
.factory('UserFactory', function($state, $firebaseAuth, $firebaseObject, config, Notification){

  var auth = $firebaseAuth(); //Explain why we do it this way?

    //Define default user
    var UserFactory = {
        login: function(type)
        {
            // Login with Google
            if(type=="google" || type=="facebook")
            {
                auth.$signInWithPopup(type).then(function(response) {
                    var user = response.user
                    Notification.success({message:"Welcome " + user.displayName + "!"});
                }).catch(function(error) {
                    var message = error.message || 'Authentication failed';
                    Notification.error({title:'Login Error', message:message});
                    console.log("Authentication failed:", error);
                });
            } else {
                Notification.error({title:'Login Error',message:'Invalid login provider: ' + type});
            }
        },
        logout: function()
        {
            Notification.success({message:"Goodbye!"});
            auth.$signOut();
        }
    }

    //Event listener on Authentication changes
    auth.$onAuthStateChanged(function(user) {
        if (user) {
            console.log(user);
            /**
             *
             * If first login, add to users db
             * Below is a simple version.
             * PLEASE NOTE: isAdmin value is not secure, someone could easily manipulate that
             * https://thinkster.io/tutorials/angularfire-realtime-slack-clone/storing-user-profiles-in-firebase
             */
            var ref = firebase.database().ref('users');

            ref.child(user.uid).once('value', function(snapshot) {
                if(!snapshot.exists())
                {
                    console.log("HERE!");
                    ref.child(user.uid).set({name:user.displayName});
                } else {
                    console.log("Nope");
                    user.isAdmin = snapshot.val().isAdmin;
                }
                UserFactory = angular.extend(UserFactory, user);
            });

            $state.go(config.defaultAdminState);
        } else {
            console.log("logged out");
            UserFactory.uid = null;
            $state.go(config.defaultState);
        }
    }, function(error) {
        console.log(error);
    });


  return UserFactory;
});
