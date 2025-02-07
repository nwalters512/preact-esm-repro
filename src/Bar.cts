const { h } = require('preact');
const { useState } = require('preact/hooks');

export function Bar() {
  const [state, setState] = useState(0);
  return h('div', {}, 'Hello, Bar!');
}

module.exports = { Bar };
