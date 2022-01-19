import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../googl_books/src/common/App';
import { Provider } from 'react-redux';
import { store } from '../../googl_books/src/redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
