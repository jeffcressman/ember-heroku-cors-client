import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string')
});

User.reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: 'Cliff Ramon',
			email: 'cliff@somewhere.com',
			password: 'password',
		},
		{
			id: 2,
			name: 'Dana Orf',
			email: 'dana@somewhere.com',
			password: 'password',
		},
	]
});

export default User;