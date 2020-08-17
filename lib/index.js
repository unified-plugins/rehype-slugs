module.exports = anchor

var search = require('./search')
var contents = require('./contents')
var toExpression = require('./to-expression')

function anchor(node, options) {
  var settings = options || {}
  var map = search(node, settings)

  anchor.map = map.length === 0 ? null : contents(map, settings.tight, settings.prefix)

  return node
}