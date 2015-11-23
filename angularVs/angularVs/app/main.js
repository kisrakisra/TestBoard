(function () {
    'use strict';

    angular
    .module('app', [])
    .filter('kittens', function () {

        return function (data, exclamations) {

            var kittens = 'Ooh, Kittens';
            exclamations = typeof exclamations !== 'number' ? 1 : exclamations;

            for (var i = 0; i < exclamations; i++) {
                kittens = kittens + '!';
            }

            return kittens;
        };
    });

    angular
        .module('app')
        .controller('Main', main)
    ;

    function main() {
        var vm = this, CALCULATING_MSG = 'Calculating...';

        vm.food = 'Pizza';
        vm.number = 200;
        
        vm.calculateTotal = function () {
            var totalPlusTip = vm.totalBill + vm.totalBill * vm.tipPercent / 100;
            var amtPerPerson = totalPlusTip / vm.peopleAmt;
            vm.totalPerPerson = amtPerPerson || CALCULATING_MSG;
        }
        vm.calculateTotal();
       
        return vm;
    }
    function main($filter) {
        var vm = this;

        vm.text = 'Here is some text';
        vm.preprocessText = $filter('kittens')(vm.text);
    }
})();