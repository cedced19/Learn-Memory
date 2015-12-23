module.exports = ['$scope', '$location', '$http', '$rootScope', 'sweet', '$cookieStore', function($scope, $location, $http, $rootScope, sweet, $cookieStore) {

        $rootScope.user = $cookieStore.get('learn-memory-user');
        if ($rootScope.user) {
            $location.path('/');
        }

        $scope.login = function () {
            $http.post('/login', {
                name: $scope.name,
                password: $scope.password
            }).success(function(data) {
                $rootScope.user = data;
                $location.path('/');
            }).error(function() {
                sweet.show('Oops...', 'Something went wrong!', 'error');
            });
        };
}];
