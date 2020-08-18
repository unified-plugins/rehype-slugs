module.exports = contents;

function contents(map) {
  var minDepth = Infinity;
  var length = map.length;

  for (var i = 0; i < length; i++) {
    if (map[i].depth < minDepth) {
      minDepth = map[i].depth;
    }
  }

  for (var i = 0; i < length; i++) {
    map[i].depth -= minDepth - 1;
  }

  var text = '';

  for (var i = 0; i < length; i++) {
    extractHeadingText(map[i]);
    map[i].text = text;
    text = '';
    delete map[i].children;
  }

  function extractHeadingText(entry) {
    var children = entry.children;
    var length = children.length || 0;

    for (var j = 0; j < length; j++) {
      var child = children[j];

      if (child.type === 'text') {
        text += child.value;
      } else if (child.type === 'element') {
        extractHeadingText(child);
      }
    }
  }

  return map;
}
