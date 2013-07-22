define([
  'knockout',
  'viewmodels/navBar.viewmodel',
  'viewmodels/header.viewmodel',
  'viewmodels/betterlist.viewmodel',
  //'viewmodels/pagedgrid.viewmodel',
  'viewmodels/planets.viewmodel',
  'viewmodels/alerts.viewmodel',
  'viewmodels/footer.viewmodel'
  ],
  function(ko, HeaderViewModel, navBarViewModel, BetterListViewModel, PlanetsViewModel, AlertsViewModel, FooterViewModel) {
    var init = function() {

      var navBar = new navBarViewModel('.navbar');
      navBar.init();

      var header = new HeaderViewModel('.header');
      header.init();

      var betterList = new BetterListViewModel('.betterlist');
      betterList.init();

      // var pagedGridData = [
      //   { name: "Well-Travelled Kitten", sales: 352, price: 75.95 },
      //   { name: "Speedy Coyote", sales: 89, price: 190.00 },
      //   { name: "Furious Lizard", sales: 152, price: 25.00 },
      //   { name: "Indifferent Monkey", sales: 1, price: 99.95 },
      //   { name: "Brooding Dragon", sales: 0, price: 6350 },
      //   { name: "Ingenious Tadpole", sales: 39450, price: 0.35 },
      //   { name: "Optimistic Snail", sales: 420, price: 1.50 }
      // ];
      // var pagedGrid = new PagedGgridViewModel(pagedGridData, '#pagedgrid');
      // pagedGrid.init();

      var planets = new PlanetsViewModel('.planetsContainer');
      planets.init();

      var alerts = new AlertsViewModel();
      //alerts.init();

      var footer = new FooterViewModel();
      footer.init();
    };

    return {
      init : init
    };
  }
);