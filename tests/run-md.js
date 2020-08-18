var fs = require('fs');
var path = require('path');
var unified = require('unified');
var merge = require('deepmerge')
var markdown = require('remark-parse');
var remark2rehype = require('remark-rehype');
var slugs = require('..');
var sanitize = require('rehype-sanitize')
var gh = require('hast-util-sanitize/lib/github')
// var doc = require('rehype-document')
var format = require('rehype-format');
var html = require('rehype-stringify');
var report = require('vfile-reporter');

var result;
unified()
  .use(markdown)
  .use(remark2rehype)
  .use(slugs, {
    maxDepth: 3,
    callback: function (res) {
      result = res;
    },
  })
  // .use(doc, {title: ''})
  .use(format)
  .use(sanitize, gh)
  .use(html)
  .process(fs.readFileSync(path.resolve(__dirname, './example.md')), function (
    err,
    file,
  ) {
    console.log(result);
    console.log(String(file));
  });
