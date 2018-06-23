// Initialize Firebase
var config = {
  apiKey: "AIzaSyCkfb_1xOgxxlVRPDOWkP7gLwqSkRv_0hA",
  authDomain: "band-website-f3dcc.firebaseapp.com",
  databaseURL: "https://band-website-f3dcc.firebaseio.com",
  projectId: "band-website-f3dcc",
  storageBucket: "band-website-f3dcc.appspot.com",
  messagingSenderId: "365567876413"
};
firebase.initializeApp(config);

angular
.module('app', ['ui.router','firebase', 'ui.bootstrap', 'ui.grid', 'ui-notification', 'app.home', 'app.admin'])
.config(function($urlRouterProvider, NotificationProvider){
    $urlRouterProvider.otherwise('/home');

    NotificationProvider.setOptions({
        delay: 5000,
        startTop: 50,
        startRight: 40,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'right',
        positionY: 'bottom'
    });
})
// Below is the beginner way to configure applciation variables
// When you are ready for various environments:
// https://www.jvandemo.com/how-to-configure-your-angularjs-application-using-environment-variables/
.constant('config', {
    //see components/user/components.js
    defaultState: 'home',
    defaultAdminState: 'admin.newsletter'
})
