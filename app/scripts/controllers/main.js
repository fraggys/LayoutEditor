'use strict';

layoutEditorApp.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Testacular'
    ];
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
            $scope.test = function (e) {
                // console.log(e);
            }
            $scope.openDialogWindow = function () {
                $('#dialogWindow').dialog('open');
            }
        }
    };
});