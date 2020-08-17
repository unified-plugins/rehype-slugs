module.exports = search

var visit = require('unist-util-visit')
var convert = require('unist-util-is/convert')
var slugs = require('github-slugger')()
var cryptoRandomString = require('crypto-random-string');
var toExpression = require('./to-expression')

var heading = convert('heading')

function search(root, settings) {
  var length = root.children.length
  var depth = null
  var maxDepth = settings.maxDepth || 6
  var skip = settings.skip ? toExpression(settings.skip) : null
  var parents = convert(settings.parents || root)
  var map = []

  slugs.reset()

  visit(root, 'heading', onheading)

  return map

  function onheading(child, index, parent) {
    if (!parents(parent)) {
      return
    }

    var slug = attachId(child)

    map.push({
      depth: child.depth,
      children: child.children,
      id: slug
    })
  }
}

function attachId(node) {
  var slug = slugs.slug(cryptoRandomString({length: 10}))
  if (node.properties) {
    node.properties.id = slug
  } else {
    node.properties = {id: slug}
  }
  return slug
}
