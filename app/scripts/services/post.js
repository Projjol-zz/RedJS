'use strict';

app.factory('Post', function ($resource) {
  return $resource('https://blazing-fire-6602.firebaseIO.com/posts/:id.json');
});