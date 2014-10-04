import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberHerokuCorsClientENV.locationType
});

Router.map(function() {
});

export default Router;
