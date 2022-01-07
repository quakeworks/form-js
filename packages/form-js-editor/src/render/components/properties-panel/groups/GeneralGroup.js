import { Group } from '../components';

import {
  IdEntry,
  KeyEntry
} from '../entries';

import { INPUTS } from '../Util';

export default function GeneralGroup(field, editField) {
  const { type } = field;

  const entries = [];

  if (type === 'default') {
    entries.push(<IdEntry editField={ editField } field={ field } />);
  }

  if (INPUTS.includes(type) || type === 'Bool') {
    entries.push(<KeyEntry editField={ editField } field={ field } />);
  }

  if (type === 'Content') {
    entries.push(<KeyEntry editField={ editField } field={ field } />);
  }

  if (type === 'String') {
    entries.push(<KeyEntry editField={ editField } field={ field } />);
  }

  if (type === 'Number' || type === 'File' || type === 'Date' || type === 'Attachment' || type === 'Flow') {
    entries.push(<KeyEntry editField={ editField } field={ field } />);
  }

  return (
    <Group label="General">
      {
        entries.length ? entries : null
      }
    </Group>
  );
}
