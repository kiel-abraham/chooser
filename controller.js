var app = angular.module("chooserApp", []);

app.controller("mainCtrl", ["$scope", function ($scope) {
    $scope.data = [];
    $scope.option = "";
    $scope.visible = false;
    $scope.hideReset = true;
    $scope.hideChoose = true;
    $scope.hideAdd = false;
    
    $scope.enter = function () {
        var a = $scope.data.indexOf($scope.option);
        if (a == -1 && $scope.option != "") {
            $scope.data.push($scope.option);
        }
        $scope.option = "";
        $("#input").focus();
        if ($scope.data.length > 1) {
            $scope.hideChoose = false;
            $scope.hideReset = false;
        }
    };
    
    $scope.run = function () {
        $scope.visible = true;
        var r = Math.floor(Math.random() * $scope.data.length);
        $scope.selected = $scope.data[r];
        var c = $scope.data.indexOf($scope.data[r]) + 1;
        $scope.hideChoose = true;
        $scope.hideAdd = true;
        $(".fa-window-close").addClass("hidden");
        $(".list-group-item:nth-child("+c+")").addClass("active");
    };
    
    $scope.reset = function () {
        $scope.data = [];
        $scope.selected = "";
        $scope.visible = false;
        $scope.hideReset = true;
        $scope.hideChoose = true;
        $scope.hideAdd = false;
        $("form").ready(function () {
            $("#input").focus();
        });
    };
    
    $scope.remove = function (id) {
        $scope.data.splice(id, 1);
        $("#input").focus();
        if ($scope.data.length == 1) {
            $scope.hideChoose = true;
            $scope.hideReset = true;
        }
    };
}]);