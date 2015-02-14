'use strict';

layoutEditorApp.controller('MainCtrl', function ($scope) {
    $scope.layoutObject = {};
    $scope.$watch('activeObject', function(newVal){
        if(newVal){
            var id = '#'+newVal.id;
            $(id).offset({"top":newVal.posY,"left":newVal.posX})
            .outerWidth(newVal.width)
            .outerHeight(newVal.height);
        }
    },true);
    $scope.addSourceArea = function () {
      var id = new Date().getTime();
        var srcArea = {
            id: id,
            posX: "",
            posY: "",
            width: "100",
            height: "100",
            deviceId: "",
            channelId: ""
        }
        $scope.layoutObject[id]=srcArea;
    };
    $scope.removeSourceAreaById = function () {
    };
});

layoutEditorApp.directive('source', function source() {

    return {
        restrict: "E",
        templateUrl: '../../views/source.html',
        replace: true,
        scope: {
            sourceData: '='
        },
        link:function(scope,elem,attr){
            scope.sourceData.posX = elem[0].offsetLeft;
            scope.sourceData.posY = elem[0].offsetTop;
        },
        controller: function ($scope) {
            $scope.calcPosition = function (e) {
                $scope.sourceData.posX = e.target.offsetLeft;
                $scope.sourceData.posY = e.target.offsetTop;
                $scope.sourceData.width = e.target.offsetWidth;
                $scope.sourceData.height = e.target.offsetHeight;
            };
            $scope.openDialogWindow = function () {
                $scope.$root.activeObject = $scope.sourceData;
                $('#dialogWindow').dialog('open');
            };
        }
    };
});