define([
    'knockout',
    'jquery',
    'text!views/header.view.html'
  ], function(ko, $, ViewTemplate) {


    var FooterViewModel = function () {
        this.template = ViewTemplate;

        this.init = function() {
            $('.header').append(this.template);
            ko.applyBindings(this, document.getElementById('header'));
        };
    };


    return FooterViewModel;
  }
);
