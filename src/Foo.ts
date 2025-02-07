import { h } from 'preact';
import { useState } from 'preact/hooks'

export function Foo() {
  const [state, setState] = useState(0);
  return h('div', {}, 'Hello, Foo!');
}
