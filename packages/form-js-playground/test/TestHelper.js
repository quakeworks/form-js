import './test.css';

import '@quakeworks/form-js/dist/assets/form-js.css';
import '@quakeworks/form-js/dist/assets/form-js-editor.css';
import '@quakeworks/form-js/dist/assets/dragula.css';

export function isSingleStart(topic) {

  // @ts-ignore-next-line
  return window.__env__ && window.__env__.SINGLE_START === topic;
}

export function insertCSS(name, css) {
  if (document.querySelector('[data-css-file="' + name + '"]')) {
    return;
  }

  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.setAttribute('data-css-file', name);

  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));

  head.appendChild(style);
}
