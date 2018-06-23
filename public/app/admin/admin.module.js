angular
.module('app.admin',[])
.config(function($stateProvider){
    $stateProvider
    .state({
        name: 'admin',
        url: '/admin',
        templateUrl: 'app/admin/admin.html'
    })
    .state({
      name:'admin.newsletter',
      url:'/newsletter',
      controller: "NewsletterController",
      templateUrl: "./app/admin/newsletter/newsletter.html"
    })
    .state({
        name: 'admin.dashboard',
        url: '/dashboard',
        templateUrl: 'app/admin/dashboard.html'
    })
    .state({
      name: 'admin.users',
      url: '/users',
      controller: 'UsersController',
      templateUrl: 'app/admin/users/users.html'
  })
  .state({
    name: 'admin.forms',
    url: '/forms',
    controller: 'FormsController',
    templateUrl: 'app/admin/forms/forms.html'
  });
});
