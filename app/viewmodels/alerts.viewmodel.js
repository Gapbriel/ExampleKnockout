define([
    'knockout',
    'jquery',
    'text!views/alerts.view.html'
  ], function(ko, $, ViewTemplate) {


    var AlertViewModel = function () {
        this.template = ViewTemplate;

        this.init = function() {
            $('section').append(this.template);
            ko.applyBindings(this, document.getElementById(''));
        };
    };


    return AlertViewModel;
  }
);
