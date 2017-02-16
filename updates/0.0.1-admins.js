var keystone = require('keystone');
var User = keystone.list('User');

module.exports = function (done) {
	new User.model({
		name: {
			first: 'Demo',
			last: 'User'
		},
		email: 'ptspzy@126.com',
		password: 'demo',
		isAdmin: true,
		isProtected: true,
	})
	.save(done);
};
