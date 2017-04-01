app.config(function($routeProvider) {
    $routeProvider


        .when('/', {
            templateUrl: 'app/home/home.html',
            controller: 'homeCtrl'
        })


        .when('/projects', {
            templateUrl: 'app/projects/projects.html',
            controller: 'projectsCtrl'
        })


        .when('/info', {
            templateUrl: 'app/info/info.html',
            controller: 'infoCtrl'
        })

        .when('/acknowledgments', {
            templateUrl: 'app/acknowledgments/acknowledgments.html',
            controller: 'acknowledgmentsCtrl'
        })


        .when('/experience', {
            templateUrl: 'app/experience/experience.html',
            controller: 'experienceCtrl'
        })

        .otherwise({
          templateUrl: 'app/home/home.html',
          controller: 'homeCtrl'
        });
});
