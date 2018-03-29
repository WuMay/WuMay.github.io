angular.module('myApp',[])
.factory("Data",function () {
    return {
        msg: 'Data from factory'
    };
})
.controller('myCtrl',function ($scope,Data) {
    $scope.msg = Data;
})
    .controller('myCtrl2',function ($scope,Data) {
    $scope.msg = Data;
})