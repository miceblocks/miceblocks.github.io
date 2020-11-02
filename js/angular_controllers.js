var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.downloadsList = [
        /*
        {
            "version": "",
            "minecraft": "",
            "link": ""
        },
        */
        {
            "version": "A.12",
            "minecraft": "1.16.3",
            "link": "#"
        },
    ]
});
