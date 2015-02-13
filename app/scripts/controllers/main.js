'use strict';

layoutEditorApp.controller('MainCtrl', function ($scope) {
    $scope.layoutObject = [];
    $scope.addSourceArea = function(){
        var srcArea = {
            id:new Date().getTime(),
            posX: "30",
            posY: "60",
            width: "100",
            height:"100",
            deviceId:"",
            channelId:""
        }
        $scope.layoutObject.push(srcArea);
    }
    $scope.removeSourceArea = function(){
        //TODO implement later
    }

    $scope.attachDialog = function(e){console.dir(e);}
});

layoutEditorApp.directive('source', function source() {

    return {
        restrict: "E",
        templateUrl: '../../views/source.html',
        replace: true,
        scope: {
            sourceData: '='
        },
        controller: function ($scope) {
            $scope.calcPosition = function (e) {
                $scope.sourceData.posX = e.target.offsetLeft;
                $scope.sourceData.posY = e.target.offsetTop;
                $scope.sourceData.width = e.target.offsetWidth;
                $scope.sourceData.height = e.target.offsetHeight;
            }
            $scope.openDialogWindow = function () {
                $('#dialogWindow').dialog('open');
            }
        }
    };
});