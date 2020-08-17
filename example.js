// Dependencies:
var u = require('unist-builder')
var anchor = require('.')

// Given a mdast tree:
var tree = u('root', [
  u('heading', {depth: 1}, [u('text', 'Alpha')]),
  u('heading', {depth: 2}, [u('text', 'Bravo')]),
  u('heading', {depth: 3}, [u('text', 'Charlie')]),
  u('heading', {depth: 2}, [u('text', 'Delta')])
])

console.log('javascript', require('util').inspect(tree, {depth: 3}))

var table = anchor(tree)

// Yields:
console.log('javascript', require('util').inspect(table, {depth: 3}))