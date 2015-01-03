'use strict';

app.factory('Post', function($resource) {
	return $resource('https://blazing-fire-6602.firebaseio.com/posts/:id.json');
});
