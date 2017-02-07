(function () {
'use strict';

  angular.module('FirstProjApp',[])

  .controller('ProjectController', ProjectController)
  .filter('replace' , ReplaceFilter)
  .filter('truth', TruthFilter);

  ProjectController.$inject = ['$scope', 'replaceFilter'];

  function ProjectController($scope , replaceFilter){
    $scope.stringInput = "";
    $scope.countElem = 0;
    $scope.arr = [];
    $scope.msg ="This is just a message i am displaying and testing on";
    $scope.countEls = function(){
      var ip = $scope.stringInput;
      $scope.arr = ip.split(',');
      var temp1 = $scope.arr;
      var cnt = temp1.length;
      $scope.countElem = cnt;
      if(cnt <= 1){
        $scope.msg = "input more than one values!";
      }
      else if (cnt >= 1 &&  cnt <= 3 ){
        $scope.msg = 'Enjoy';
      }
      else if(cnt>3){
        $scope.msg = "Too much";
      }

    };

    $scope.sayReplaceMsg = function(){
      var newmsg = "This is just a message i am displaying and testing on";
      newmsg = replaceFilter(newmsg);

      return newmsg;

    };

  }


  function ReplaceFilter(){
    return function (input){

      input=input || "";
      input = input.replace("testing", "nothing");

      return input;
    };
  }

  function TruthFilter(){
    return function (input, target, replace){

      input=input || "";
      input = input.replace(target,replace);

      return input;
    };
  }

})();
