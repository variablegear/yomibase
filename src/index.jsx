import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './yomibase.jsx';

render( <AppContainer><App/></AppContainer>, document.querySelector('#container'));

if (module && module.hot) {
  module.hot.accept('./yomibase.jsx', () => {
    const App = require('./yomibase.jsx').default;
    render(
      <AppContainer>
        <App/>
      </AppContainer>,
      document.querySelector('#app')
    );
  });
}
