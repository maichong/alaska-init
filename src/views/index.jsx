/* eslint global-require:0 */
/* eslint wrap-iife:0 */

import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux';
import App from './App';

const views = {
  IndexPage: require('./pages/IndexPage').default
};

function getReactElements() {
  if (document.getElementsByClassName) {
    return document.getElementsByClassName('react');
  }
  // IE8
  return document.querySelectorAll('.react');
}

function getPropsDataset(el) {
  if (el.dataset) {
    return el.dataset.props;
  }
  // IE 8 ~ 10

  let attrs = el.attributes;
  for (let i = 0; i < attrs.length; i += 1) {
    let { name, value } = attrs[i];
    if (name === 'data-props') {
      return value;
    }
  }
  return '';
}

(function () {
  let elements = getReactElements();
  let i;
  for (i = 0; i < elements.length; i += 1) {
    let el = elements[i];
    let { id } = el;
    if (!id || !views[id]) {
      console.error(id + ' Component Not Found');
      continue;
    }
    try {
      let props = getPropsDataset(el);
      if (props) {
        // eslint-disable-next-line
        props = eval('(' + props + ')');
      }
      ReactDOM.render(React.createElement(views[id], props || {}), el);
    } catch (e) {
      console.error('Error' + e.message || e);
    }
  }
})();

let appElement = document.getElementById('app');
if (appElement) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('app')
  );
}
