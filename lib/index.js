module.exports = slugs;

var search = require('./search');
var contents = require('./contents');
var toExpression = require('./to-expression');

function slugs(node, options) {
  var settings = options || {};
  var map = search(node, settings);
  var callback = settings.callback;

  map = map.length === 0 ? null : contents(map);

  if (typeof callback === 'function') {
    callback(map);
  }

  return node;
}
