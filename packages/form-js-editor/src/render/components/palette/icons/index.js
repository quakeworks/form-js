import ButtonIcon from './Button.svg';
import CheckboxIcon from './Checkbox.svg';
import FormIcon from './Form.svg';
import ColumnsIcon from './Group.svg';
import NumberIcon from './Number.svg';
import RadioIcon from './Radio.svg';
import SelectIcon from './Select.svg';
import TextIcon from './Text.svg';
import TextfieldIcon from './Textfield.svg';
import TextareaIcon from './Textarea.svg';

export const iconsByType = {
  Content: TextareaIcon,
  String: TextIcon,
  Flow: RadioIcon,
  Bool: CheckboxIcon,
  Number: NumberIcon,

  button: ButtonIcon,
  checkbox: CheckboxIcon,
  columns: ColumnsIcon,
  number: NumberIcon,
  radio: RadioIcon,
  select: SelectIcon,
  text: TextIcon,
  textfield: TextfieldIcon,
  default: FormIcon,
};
