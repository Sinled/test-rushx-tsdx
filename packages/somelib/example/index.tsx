import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ShimmerApplicationExample } from '../src';

const App = () => {
  return (
    <div>
      <ShimmerApplicationExample />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
