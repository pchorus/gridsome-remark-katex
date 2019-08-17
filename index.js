const remarkMath = require('remark-math');
const visit = require('unist-util-visit');
const katex = require('katex');

module.exports = function remarkKatexPlugin(options) {
  remarkMath.call(this);

  return tree => {
    visit(tree, 'inlineMath', node => {
      node.type = 'html';
      node.value = katex.renderToString(node.value, {
        displayMode: false,
        ...options
      });
    });

    visit(tree, 'math', node => {
      node.type = 'html';
      node.value = katex.renderToString(node.value, {
        displayMode: true,
        ...options
      });
    });
  };
};
