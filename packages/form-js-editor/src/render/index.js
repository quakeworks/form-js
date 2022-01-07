import { FormFields } from '@quakeworks/form-js-viewer';

import Renderer from './Renderer';

export default {
  __init__: [ 'formFields', 'renderer' ],
  formFields: [ 'type', FormFields ],
  renderer: [ 'type', Renderer ]
};
