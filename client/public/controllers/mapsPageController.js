app.controller('mapsPageController', ['$scope', '$http', 'httpService', function ($scope, $http, httpService) {

  $scope.tweets = {
    data: []
  };

  //renderedTweets will hold the 'history' of the tweets that have been rendered thus far
  $scope.renderedTweets = [];

  $scope.submitSearch = function () {
    //for Akash: $scope.searchField the result of the search in index.html
    httpService.getTweets($scope.searchField)
      .then(function (success) {
        var tweet = success;
        $scope.tweets.data.push(tweet);
      });
  };

  $scope.favoriteSubmit = function () {
    httpService.sendFavorite($scope.favoriteField);
  };

  $scope.login = function () {
    httpService.login();
  };

}]);
