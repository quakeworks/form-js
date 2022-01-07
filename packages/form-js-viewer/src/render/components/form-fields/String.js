import { useContext } from 'preact/hooks';

import { FormContext } from '../../context';

import Description from '../Description';
import Errors from '../Errors';
import Label from '../Label';

import {
  formFieldClasses,
  prefixId
} from '../Util';

const type = 'String';


export default function String(props) {
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

  const onChange = ({ target }) => {
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
    <input
      class="fjs-input"
      disabled={ disabled }
      id={ prefixId(id, formId) }
      onInput={ onChange }
      type="text"
      value={ value } />
    <Description description={ description } />
    <Errors errors={ errors } />
  </div>;
}

String.create = function(options = {}) {
  return {
    ...options
  };
};

String.type = type;
String.label = 'Text Field';
String.keyed = true;
