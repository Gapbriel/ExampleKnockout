define([
    'knockout',
    'simpleGrid',
    'jquery',
    'viewmodels/basicviewmodel.viewmodel',
    'text!views/pagedgrid.view.html'
  ], function(ko, simpleGrid, $, BasicViewModel, ViewTemplate) {

    var PagedGridModel = function(items, el) {

        this.el = el;
        this.template = ViewTemplate;

        this.items = ko.observableArray(items);
            this.addItem = function() {
            this.items.push({ name: "New item", sales: 0, price: 100 });
        };

        this.sortByName = function() {
            this.items.sort(function(a, b) {
                return a.name < b.name ? -1 : 1;
            });
        };

        this.jumpToFirstPage = function() {
            this.gridViewModel.currentPageIndex(0);
        };

        this.gridViewModel = new ko.simpleGrid.viewModel({
            data: this.items,
            columns: [
                { headerText: "Item Name", rowText: "name" },
                { headerText: "Sales Count", rowText: "sales" },
                { headerText: "Price", rowText: function (item) { return "$" + item.price.toFixed(2); } }
            ],
            pageSize: 4
        });
    };

    // Where inheritance works:
    PagedGridModel.prototype = new BasicViewModel();


    return PagedGridModel;
  }
);
