import FormEditor from './FormEditor';

import { schemaVersion } from '@quakeworks/form-js-viewer';

export {
  FormEditor,
  schemaVersion
};

/**
 * @typedef { import('./types').CreateFormEditorOptions } CreateFormEditorOptions
 */

/**
 * Create a form editor.
 *
 * @param {CreateFormEditorOptions} options
 *
 * @return {Promise<FormEditor>}
 */
export function createFormEditor(options) {
  const {
    schema,
    ...rest
  } = options;

  const formEditor = new FormEditor(rest);

  return formEditor.importSchema(schema).then(() => {
    return formEditor;
  });
}
