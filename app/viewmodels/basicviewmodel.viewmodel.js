/**
 * This is a basic View Model that has the basic initialize functionality to be inherit
 *  for every view model.
 */
define([
    'knockout',
    'jquery'
  ], function(ko, $) {


    var BasicViewModel = function() {

        // View Template to be filled woth the view-model view.
        this.template = '';

        // DOM's element name where renderize the view template
        this.el = '';

        /**
         * This function renderizes the view content on the screen
         *  and applies the bindings of this view model.
         */
        this.init = function() {
            $(this.el).html(this.template);
            ko.applyBindings(this, $(this.el)[0]);
        };
    };


    return BasicViewModel;
  }
);
