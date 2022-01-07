import { Group } from '../components';

import {
  IdEntry,
  LabelEntry,
} from '../entries';

import { INPUTS } from '../Util';

export default function GeneralGroup(field, editField) {
  const { type } = field;

  const entries = [];

  if (type === 'default') {
    entries.push(<IdEntry editField={ editField } field={ field } />);
  }

  if (INPUTS.includes(type) || type === 'Bool') {
    entries.push(<LabelEntry editField={ editField } field={ field } />);
  }

  if (type === 'Content') {
    entries.push(<IdEntry editField={ editField } field={ field } />);
  }

  if (type === 'String') {
    entries.push(<IdEntry editField={ editField } field={ field } />);
  }

  console.log(type)
  if (type === 'Number' || type === 'File' || type === 'Date' || type === 'Attachment') {
    entries.push(<IdEntry editField={ editField } field={ field } />);
  }

  return (
    <Group label="General">
      {
        entries.length ? entries : null
      }
    </Group>
  );
}
