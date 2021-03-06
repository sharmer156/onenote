require('angular/angular');
require('angular-aria');
require('angular-animate');
require('angular-messages');
require('angular-material');

global.p3x.onenote.ng =  angular.module('p3x-onenote', [
    'ngMaterial', 'ngMessages'
]);
require('./angular/prompt');
require('./angular/toast');

global.p3x.onenote.ng.run((p3xOnenotePrompt, p3xOnenoteToast) => {
    global.p3x.onenote.prompt = p3xOnenotePrompt;
    global.p3x.onenote.toast = p3xOnenoteToast;
})

angular.element(document).ready(() => {
    const bootstrapElement = document.getElementById('p3x-onenote-bootstrap');
    angular.bootstrap(bootstrapElement, ['p3x-onenote']);
})
