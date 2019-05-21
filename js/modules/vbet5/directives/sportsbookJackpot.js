/* global VBET5 */
VBET5.directive('sportsbookJackpot', ['$rootScope', 'jackpotManager', 'Utils', function ($rootScope, jackpotManager, Utils) {
    'use strict';

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/directive/sportsbook-jackpot.html',
        scope: {},
        link: function (scope) {
            scope.viewDetails = false;
            scope.expandedPool = {name: 'closeAll'};

            scope.jackpotWidgets = {
                amountIndex: 0
            };
            scope.jackpotData = [];

            (function subscribeForJackpotData() {
                jackpotManager.unsubscribeFromJackpotData(true);
                jackpotManager.subscribeForJackpotData(-1, function subscribeForJackpotDataCallback(data) {
                    scope.jackpotData = Utils.objectToArray(data)[0];

                }, 'getjackpots', 'sportsbook');  // -1 all games,
            })();

            scope.$on('$destroy', function() {
                jackpotManager.unsubscribeFromJackpotData(true);
            });
        }
    };
}]);
