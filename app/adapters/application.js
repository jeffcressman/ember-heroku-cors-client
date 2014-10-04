import DS from 'ember-data';

// For testing without connecting to our Rails app
// export default DS.FixtureAdapter.extend();

export default DS.RESTAdapter.extend({
	host: window.EmberHerokuCorsClientENV.APP.API_SERVER_URL
});
