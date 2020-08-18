var util = require('./lib');

module.exports = anchor;

function anchor(options) {
  var settings = options || {};
  var depth = settings.maxDepth || 6;
  var skip = settings.skip;
  var callback = settings.callback;

  return transformer;

  function transformer(node) {
    util(node, {
      maxDepth: depth,
      skip: skip,
      callback: callback,
    });
  }
}
