app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
    $routeProvider


        .when('/', {
            templateUrl: 'app/home/home.html',
            controller: 'homeCtrl'
        })


        .when('/education', {
            templateUrl: 'app/education/education.html',
            controller: 'educationCtrl'
        })


        .when('/resume', {
            templateUrl: 'app/resume/resume.html',
            controller: 'resumeCtrl'
        })


        .when('/experience', {
            templateUrl: 'app/experience/experience.html',
            controller: 'experienceCtrl'
        })


        // .when('/game', {
        //     templateUrl: 'app/game/game.html',
        //     controller: 'gameCtrl'
        // })
}]);
