define([
    'knockout',
    'jquery',
    'text!views/navbar.view.html'
  ], function(ko, $, ViewTemplate) {


    var navBarViewModel = function () {
        this.template = ViewTemplate;

        this.init = function() {
            $('body').append(this.template);
            ko.applyBindings(this, document.getElementById('.navbar'));
        };
    };


    return navBarViewModel;
  }
);
