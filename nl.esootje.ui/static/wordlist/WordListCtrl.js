define(["require", "exports"], function (require, exports) {
    return ['$scope', '$stateParams', 'wordListService',
        function ($scope, $stateParams, wordListService) {
            $scope.stateParams = $stateParams;
            wordListService.getWordLists();
        }
    ];
});
