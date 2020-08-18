var fs = require('fs');
var path = require('path');
var unified = require('unified');
var markdown = require('remark-parse');
var remark2rehype = require('remark-rehype');
var anthor = require('..');
var sanitize = require('hast-util-sanitize');
// var doc = require('rehype-document')
var format = require('rehype-format');
var html = require('rehype-stringify');
var report = require('vfile-reporter');

var anthors;
unified()
  .use(markdown)
  .use(remark2rehype)
  .use(sanitize)
  .use(anthor, {
    maxDepth: 3,
    callback: function (res) {
      anthors = res;
    },
  })
  // .use(doc, {title: ''})
  .use(format)
  .use(html)
  .process(fs.readFileSync(path.resolve(__dirname, './example.md')), function (
    err,
    file,
  ) {
    console.log(anthors);
    console.log(String(file));
  });
