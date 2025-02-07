import { render } from 'preact-render-to-string';
import { h, Fragment} from 'preact';
import { Foo } from './Foo.js';
import { Bar } from './Bar.cjs';

function App() {
  return (
    h(Fragment, {}, [
      h(Foo, {}, []),
      h(Bar, {}, [])
    ])
  );
}

console.log(render(h(App, {}, [])));
