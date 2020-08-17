var util = require('./lib')

module.exports = anchor

function anchor(options) {
  var settings = options || {}
  var depth = settings.maxDepth || 6
  var tight = settings.tight
  var skip = settings.skip

  return transformer

  function transformer(node) {
    util(node, {
      maxDepth: depth,
      tight: tight,
      skip: skip
    })
    util.map
  }
}