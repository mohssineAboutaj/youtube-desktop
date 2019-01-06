// requirejs config file

requirejs.config({
	baseUrl: 'js',
	paths: {
		jquery: 'jquery.min',
		bootstrap: 'bootstrap.min',
		script: 'script'
	}
});

requirejs([
	'jquery.min',
	'../popper',
	'bootstrap.min',
	'script'
]);