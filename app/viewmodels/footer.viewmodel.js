
define([
    'knockout',
    'jquery',
    'text!views/footer.view.html'
  ], function(ko, $, ViewTemplate) {


    var FooterViewModel = function () {
        this.template = ViewTemplate;

        this.init = function() {
            $('.footer').append(this.template);
            ko.applyBindings(this, document.getElementById('footer'));
        };
    };


    return FooterViewModel;
  }
);
