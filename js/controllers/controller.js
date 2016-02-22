app.controller('ngController', function ($scope, ngServices) {
    ngServices.get().then(function (obj) {
        $scope.obj = obj;
	console.log(obj);
    });
});
