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
<<<<<<< HEAD
            "minecraft": "1.16.3",
=======
            "minecraft": "[1.13] ~ [1.16.3]",
>>>>>>> 092c8561377fc4b29bc5562361af7bc0435d69ce
            "link": "#"
        },
    ]
});
