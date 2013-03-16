Package.describe({
	summary: "A simple, lightweight jQuery plugin for reading, writing and deleting cookies."
});

Package.on_use(function (api) {
	api.use('jquery', 'client');
	api.add_files([
		'lib/jquery-cookie/jquery.cookie.js'
		], 'client');
});