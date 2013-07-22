require.config({
  paths: {
    'jquery' : '../libs/jquery/jquery-1.7.1.min',
    'underscore' : '../libs/underscore/underscore',
    'knockout': '../libs/knockout/knockout-2.2.1.debug',
    'simpleGrid': '../libs/knockout/simplegrid/simpleGrid',
    'bootswatch': '../libs/knockout/boostrap/bootswatch',
    'bootstrap': '../libs/knockout/boostrap/bootstrap',
    'text' : '../libs/require/text'
  },
  shim: {
    'simpleGrid': {
      deps: ['knockout'],
      exports: 'simpleGrid'
    }
  }
});

require(
  [
    'app'
  ],
  function(app) {
    app.init();
  }
);
