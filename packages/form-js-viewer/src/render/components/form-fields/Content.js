import Markup from 'preact-markup';

import {
  formFieldClasses,
  safeMarkdown
} from '../Util';

const type = 'Content';


export default function Content(props) {
  const { field } = props;

  const { text = '' } = field;

  return <div class={ formFieldClasses(type) }>
    <Markup markup={ safeMarkdown(text) } trim={ false } />
  </div>;
}

Content.create = function(options = {}) {
  return {
    text: 'Content',
    ...options
  };
};

Content.type = type;
Content.keyed = false;
