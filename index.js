var util = require('./lib');

module.exports = slugs;

function slugs(options) {
  var settings = options || {};
  var prefix = settings.prefix || '';
  var depth = settings.maxDepth || 6;
  var skip = settings.skip;
  var callback = settings.callback;

  return transformer;

  function transformer(node) {
    util(node, {
      prefix: prefix,
      maxDepth: depth,
      skip: skip,
      callback: callback,
    });
  }
}
