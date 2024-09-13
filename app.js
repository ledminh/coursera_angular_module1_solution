(function () {
  ("use strict");

  angular
    .module("LunchCheck", [])
    .controller("LunchBoxController", LBController);

  LBController.$inject = ["$scope"];

  function LBController($scope) {
    $scope.lunchBox = "";
    $scope.message = "";
    $scope.messageStyle = "";

    $scope.checkLunchBox = function () {
      var lunchBox = $scope.lunchBox;
      var lunchBoxArray = lunchBox
        .split(",")
        .filter((item) => item.trim() !== "");

      if (lunchBox.length === 0) {
        $scope.message = "Please enter data first";
        $scope.messageStyle = "alert alert-danger";
      } else if (lunchBoxArray.length <= 3) {
        $scope.message = "Enjoy!";
        $scope.messageStyle = "alert alert-success";
      } else {
        $scope.message = "Too much!";
        $scope.messageStyle = "alert alert-success";
      }
    };
  }
})();
