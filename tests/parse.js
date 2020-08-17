var fs = require('fs')
var path = require('path')
var unified = require('unified')
var markdown = require('remark-parse')
var remark2rehype = require('remark-rehype')
var anthor = require('..')
var sanitize = require('hast-util-sanitize')
// var doc = require('rehype-document')
var format = require('rehype-format')
var html = require('rehype-stringify')
var report = require('vfile-reporter')

unified()
  .use(markdown)
  .use(remark2rehype)
  .use(sanitize)
  .use(anthor, {
    done(anthors) {
      console.log(anthors)
    }
  })
  // .use(doc, {title: ''})
  .use(format)
  .use(html)
  .process(fs.readFileSync(path.resolve(__dirname, './example.md')), function (err, file) {
    console.error(report(err || file))
    console.log(String(file))
  })