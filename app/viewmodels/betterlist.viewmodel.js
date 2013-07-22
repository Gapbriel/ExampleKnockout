// The view model holds all the state we're working with. It also has methods that can edit it, and it uses
// computed observables to calculate more state in terms of the underlying data
// --
// The view (i.e., the HTML UI) binds to this using data-bind attributes, so it always stays up-to-date with
// the view model, even though the view model does not know or care about any view that binds to it


define([
    'knockout',
    'jquery',
    'viewmodels/basicviewmodel.viewmodel',
    'text!views/betterlist.view.html'
  ], function(ko, $, BasicViewModel, ViewTemplate) {

    var BetterListModel = function(el) {
        this.template = ViewTemplate;
        this.el = el;

        this.itemToAdd = ko.observable('');
        this.allItems = ko.observableArray(['Fries', 'Eggs Benedict', 'Ham', 'Cheese']); // Initial items
        this.selectedItems = ko.observableArray(['Ham']);                                // Initial selection

        this.addItem = function () {
            if ((this.itemToAdd() !== '') && (this.allItems.indexOf(this.itemToAdd()) < 0)) // Prevent blanks and duplicates
                this.allItems.push(this.itemToAdd());
            this.itemToAdd(''); // Clear the text box
        };

        this.removeSelected = function () {
            this.allItems.removeAll(this.selectedItems());
            this.selectedItems([]); // Clear selection
        };

        this.sortItems = function() {
            this.allItems.sort();
        };
    };

    // Where inheritance works:
    BetterListModel.prototype = new BasicViewModel();

    return BetterListModel;
  }
);
