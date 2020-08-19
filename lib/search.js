module.exports = search;

var visit = require('unist-util-visit');
var convert = require('unist-util-is/convert');
var isElement = require('hast-util-is-element');
var hasProperty = require('hast-util-has-property');
var cryptoRandomString = require('crypto-random-string');
var toExpression = require('./to-expression');

var headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

function search(root, settings) {
  var length = root.children.length;
  var depth = null;
  var prefix = settings.prefix || ''
  var maxDepth = settings.maxDepth || 6;
  var skip = settings.skip ? toExpression(settings.skip) : null;
  var parents = convert(settings.parents || root);
  var map = [];

  visit(root, 'element', onheading);

  return map;

  function onheading(child, index, parent) {
    var depth = child.tagName.slice(1, 2);

    if (!parents(parent)) {
      return;
    }

    if (isElement(child, headings) && depth <= maxDepth) {
      var slug = insertId(child, prefix);
      map.push({
        id: slug,
        depth: depth,
        tagName: child.tagName,
        children: child.children,
      });
    }
  }
}

function insertId(node, prefix) {
  var slug = cryptoRandomString({ length: 5 });
  slug = `${prefix}${slug}`
  if (hasProperty(node, 'id')) {
    node.properties.id = slug;
  } else {
    node.properties = { id: slug };
  }
  return slug;
}
