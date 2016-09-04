import angular = require('angular');

export = ['$http', '$q', 'BASE_URL', function($http, $q, BASE_URL) {
    var wordListUrl = BASE_URL + '/wordlist';
    var self = this;

    this.getWordLists = function() {
        return $http.get(wordListUrl).then(function(response) {
            console.log(response.data);
            return response.data;
        });
    }

}];
