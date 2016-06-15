angular.module('userTodo', []);

function mainController($scope, $http) {

    // when landing on the page, get all todos and show them
    $http.get('/user').success(function(data) {
            $scope.user = data;
            console.log(data);
        }).error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createUser = function() {
    	console.log("Entro aqui");
        $http.post('/user', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.user = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    $scope.deleteUser = function(id) {
        $http.delete('/user/' + id)
            .success(function(data) {
                $scope.user = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}