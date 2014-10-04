import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberHerokuCorsClientENV.locationType
});

// Get rid of the # in URLs
Router.reopen({
	location: 'auto',
	rootURL: '/'
});

Router.map(function() {
	this.resource('users', {path: '/'});
});

export default Router;
