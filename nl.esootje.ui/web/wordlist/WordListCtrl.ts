import angular = require('angular');

export = ['$scope', '$stateParams', 'wordListService',
    function($scope, $stateParams, wordListService) {
        $scope.stateParams = $stateParams;
        wordListService.getWordLists();
    }
];
