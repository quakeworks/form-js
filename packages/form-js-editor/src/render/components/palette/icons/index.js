import CheckboxIcon from './Checkbox.svg';
import FormIcon from './Form.svg';
import ColumnsIcon from './Group.svg';
import NumberIcon from './Number.svg';
import RadioIcon from './Radio.svg';
import TextIcon from './Text.svg';
import TextareaIcon from './Textarea.svg';
import DateIcon from './Date.svg';

export const iconsByType = {
  Content: TextareaIcon,
  String: TextIcon,
  Flow: RadioIcon,
  Bool: CheckboxIcon,
  Number: NumberIcon,
  Date: DateIcon,

  File: TextIcon,
  Attachment: TextIcon,

  columns: ColumnsIcon,
  default: FormIcon,
};
