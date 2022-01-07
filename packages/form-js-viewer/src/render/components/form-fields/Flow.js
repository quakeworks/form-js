import { useContext } from 'preact/hooks';

import { FormContext } from '../../context';

import Description from '../Description';
import Errors from '../Errors';
import Label from '../Label';

import {
  formFieldClasses,
  prefixId
} from '../Util';

const type = 'Flow';


export default function Flow(props) {
  const {
    disabled,
    errors = [],
    field,
    value
  } = props;

  const {
    description,
    id,
    label,
    validate = {},
    values
  } = field;

  const { required } = validate;

  const onChange = (v) => {
    props.onChange({
      field,
      value: v
    });
  };

  const { formId } = useContext(FormContext);

  return <div class={ formFieldClasses(type, errors) }>
    <Label
      label={ label }
      required={ required } />
    {
      values.map((v, index) => {
        return (
          <Label
            id={ prefixId(`${ id }-${ index }`, formId) }
            key={ v.value }
            label={ v.label }
            required={ false }>
            <input
              checked={ v.value === value }
              class="fjs-input"
              disabled={ disabled }
              id={ prefixId(`${ id }-${ index }`, formId) }
              type="radio"
              onClick={ () => onChange(v.value) } />
          </Label>
        );
      })
    }
    <Description description={ description } />
    <Errors errors={ errors } />
  </div>;
}

Flow.create = function(options = {}) {
  return {
    values: [
      {
        label: 'Value',
        value: 'value'
      }
    ],
    ...options
  };
};

Flow.type = type;
Flow.label = 'Flow';
Flow.keyed = true;
