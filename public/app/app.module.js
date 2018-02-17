var myModule = angular.module('MyModule', []);
// myModule.controller('MyController', function ($scope) {
//     $scope.name = "Moses";
// })

myModule.component('greeter', {
    template: '<p>hello {{$ctrl.name}} </p>',
    controller: function GreeterController(){
        console.log('inside GreeterController');
        this.name = 'Moses';
    }
})