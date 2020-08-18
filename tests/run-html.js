var fs = require('fs');
var path = require('path');
var unified = require('unified');
var merge = require('deepmerge')
var slugs = require('..');
var rehype = require('rehype-parse')
var sanitize = require('rehype-sanitize')
var gh = require('hast-util-sanitize/lib/github')
var format = require('rehype-format');
var html = require('rehype-stringify');
var report = require('vfile-reporter');

var schema = merge(gh, {tagNames: ['math', 'mi']})

unified()
  .use(rehype)
  .use(sanitize, schema)
  .use(html)
  .process(fs.readFileSync(path.resolve(__dirname, './example.html')), function (
    err,
    file,
  ) {
    console.log(String(file));
  });
