import { useContext } from 'preact/hooks';

import { FormContext } from '../../context';

import Description from '../Description';
import Errors from '../Errors';
import Label from '../Label';

import {
  formFieldClasses,
  prefixId
} from '../Util';

const type = 'Content';

export default function Content(props) {
  const {
    disabled,
    errors = [],
    field,
    value = ''
  } = props;

  const {
    description,
    id,
    label,
    validate = {}
  } = field;

  const { required } = validate;

  const onInput = ({ target }) => {
    props.onChange({
      field,
      value: target.value
    });
  };

  const { formId } = useContext(FormContext);

  return <div class={ formFieldClasses(type, errors) }>
    <Label
      id={ prefixId(id, formId) }
      label={ label }
      required={ required } />
    <textarea
      class="fjs-textarea"
      id={ prefixId(id, formId) }
      onInput={ onInput }
      value={ value } />
    <Description description={ description } />
    <Errors errors={ errors } />
  </div>;
}

Content.create = function(options = {}) {
  return {
    ...options
  };
};

Content.type = type;
Content.label = 'Text Field';
Content.keyed = true;
