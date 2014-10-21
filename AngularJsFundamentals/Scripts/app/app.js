'use strict'
//Creating a module name eventsApp.Modules are the basic building blocks of angular.Everything exits inside a module
//Empty array tells angular this module does not depend on any other module
//Capturing the module in a global variable called eventsApp. With this variable we can create controllers & services for this module
var eventsApp = angular.module('eventsApp', ['ngSanitize']);