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
            "minecraft": "[1.13] ~ [1.16.3]",
            "link": "https://miceblocks.github.io/downloads/Mice%20Blocks%20vA.12.zip"
        },

        {
            "version": "A.12.1",
            "minecraft": "[1.13] ~ [1.16.4]",
            "link": "https://miceblocks.github.io/downloads/Mice%20Blocks%20vA.12.1.zip"
        },

        {
            "version": "A.12.2",
            "minecraft": "[1.13] ~ [1.16.4]",
            "link": "https://miceblocks.github.io/downloads/Mice%20Blocks%20vA.12.2.zip"
        },
    ]
});
