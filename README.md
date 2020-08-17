```js
const vfile = require("to-vfile");
const anchor = require("mdast-util-anchor");
const remark = require("remark");

const a = anchor(vfile.readSync("example.md"));
remark()
  .use(a.plugin)
  .process(vfile.readSync("example.md"), function (err, file) {
    if (err) throw err;
    console.log(String(file));
  });
```

## Hypertext Abstract Syntax Tree format

https://github.com/syntax-tree/hast

## Security

https://www.npmjs.com/package/hast-util-sanitize

https://github.com/rehypejs/rehype-sanitize

## An interface for processing text using syntax trees

https://www.npmjs.com/package/unified
https://unifiedjs.com/learn/recipe/tree-traversal/

## Markdown processor

https://github.com/remarkjs/remark

## Utility to create a new trees with a nice syntax

https://github.com/syntax-tree/unist-builder

## 类似 Koa 剥洋葱的中间件调用实现

https://github.com/wooorm/trough

## 打包模块

https://www.npmjs.com/package/browserify

## 改造自

https://github.com/syntax-tree/mdast-util-toc/blob/main/readme.md

https://www.npmjs.com/package/remark-toc
