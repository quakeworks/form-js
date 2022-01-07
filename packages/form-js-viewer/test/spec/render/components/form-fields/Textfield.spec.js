import {
  fireEvent,
  render
} from '@testing-library/preact/pure';

import String from '../../../../../src/render/components/form-fields/String';

import { createFormContainer } from '../../../../TestHelper';

import { WithFormContext } from './helper';

const spy = sinon.spy;

let container;


describe('String', function() {

  beforeEach(function() {
    container = createFormContainer();
  });

  afterEach(function() {
    container.remove();
  });


  it('should render', function() {

    // when
    const { container } = createTextfield({
      value: 'John Doe Company'
    });

    // then
    const formField = container.querySelector('.fjs-form-field');

    expect(formField).to.exist;
    expect(formField.classList.contains('fjs-form-field-textfield')).to.be.true;

    const input = container.querySelector('input[type="text"]');

    expect(input).to.exist;
    expect(input.value).to.equal('John Doe Company');
    expect(input.id).to.equal('fjs-form-foo-Textfield_1');

    const label = container.querySelector('label');

    expect(label).to.exist;
    expect(label.textContent).to.equal('Creditor');
    expect(label.htmlFor).to.equal('fjs-form-foo-Textfield_1');
  });


  it('should render default value (\'\')', function() {

    // when
    const { container } = createTextfield();

    // then
    const input = container.querySelector('input[type="text"]');

    expect(input).to.exist;
    expect(input.value).to.equal('');
  });


  it('should render default value on value removed', function() {

    // given
    const props = {
      disabled: false,
      errors: [],
      field: defaultField,
      onChange: () => {},
      path: [ defaultField.key ]
    };

    const options = { container: container.querySelector('.fjs-form') };

    const { rerender } = render(<String { ...props } value={ 'John Doe Company' } />, options);

    // when
    rerender(<String { ...props } value={ undefined } />, options);

    // then
    const input = container.querySelector('input[type="text"]');

    expect(input).to.exist;
    expect(input.value).to.equal('');
  });


  it('should render disabled', function() {

    // when
    const { container } = createTextfield({
      disabled: true
    });

    // then
    const input = container.querySelector('input[type="text"]');

    expect(input).to.exist;
    expect(input.disabled).to.be.true;
  });


  it('should render description', function() {

    // when
    const { container } = createTextfield({
      field: {
        ...defaultField,
        description: 'foo'
      }
    });

    // then
    const description = container.querySelector('.fjs-form-field-description');

    expect(description).to.exist;
    expect(description.textContent).to.equal('foo');
  });


  describe('change handling', function() {

    it('should change text', function() {

      // given
      const onChangeSpy = spy();

      const { container } = createTextfield({
        onChange: onChangeSpy,
        value: 'John Doe Company'
      });

      // when
      const input = container.querySelector('input[type="text"]');

      fireEvent.input(input, { target: { value: 'Jane Doe Company' } });

      // then
      expect(onChangeSpy).to.have.been.calledWith({
        field: defaultField,
        value: 'Jane Doe Company'
      });
    });


    it('should clear', function() {

      // given
      const onChangeSpy = spy();

      const { container } = createTextfield({
        onChange: onChangeSpy,
        value: 'John Doe Company'
      });

      // when
      const input = container.querySelector('input[type="text"]');

      fireEvent.input(input, { target: { value: '' } });

      // then
      expect(onChangeSpy).to.have.been.calledWith({
        field: defaultField,
        value: ''
      });
    });

  });


  it('#create', function() {

    // assume
    expect(String.type).to.eql('textfield');
    expect(String.label).to.eql('Text Field');
    expect(String.keyed).to.be.true;

    // when
    const field = String.create();

    // then
    expect(field).to.eql({});

    // but when
    const customField = String.create({
      custom: true
    });

    // then
    expect(customField).to.contain({
      custom: true
    });
  });

});

// helpers //////////

const defaultField = {
  id: 'Textfield_1',
  key: 'creditor',
  label: 'Creditor',
  type: 'textfield'
};

function createTextfield(options = {}) {
  const {
    disabled,
    errors,
    field = defaultField,
    onChange,
    path = [ defaultField.key ],
    value
  } = options;

  return render(WithFormContext(
    <String
      disabled={ disabled }
      errors={ errors }
      field={ field }
      onChange={ onChange }
      path={ path }
      value={ value } />
  ), {
    container: options.container || container.querySelector('.fjs-form')
  });
}
