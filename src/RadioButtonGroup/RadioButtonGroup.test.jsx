import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import RadioButtonGroup, { RadioButton } from '.';

describe('<RadioButton />', () => {
  const text = 'text';
  const index = 0;
  const isChecked = false;
  const name = 'name';
  const onBlur = jest.fn();
  const onClick = jest.fn();
  const onFocus = jest.fn();
  const onKeyDown = jest.fn();
  const value = 'value';
  const props = {
    index,
    isChecked,
    name,
    onBlur,
    onClick,
    onFocus,
    onKeyDown,
    value,
  };
  describe('correct rendering', () => {
    it('renders RadioButton', () => {
      render(
        <RadioButton {...props}>
          {text}
        </RadioButton>,
      );

      const radioButton = screen.getByRole('radio');
      expect(radioButton).toBeInTheDocument();
      expect(radioButton).toHaveAttribute('name', name);
      expect(radioButton).toHaveAttribute('value', value);
      expect(radioButton).toHaveAttribute('aria-checked', isChecked.toString());
      expect(radioButton).toHaveAttribute('data-index', index.toString());
    });
  });

  describe('event handlers correctly triggered', () => {
    let spy;

    beforeEach(() => {
      spy = jest.fn();
    });

    afterEach(() => {
      spy.mockClear();
    });

    it('should fire onBlur', () => {
      render((<RadioButton {...props} onBlur={spy} />));
      const radioButton = screen.getByRole('radio');
      fireEvent.blur(radioButton);
      expect(spy).toHaveBeenCalledTimes(1);
    });
    it('should fire onClick', () => {
      render((<RadioButton {...props} onClick={spy} />));
      const radioButton = screen.getByRole('radio');
      fireEvent.click(radioButton);
      expect(spy).toHaveBeenCalledTimes(1);
    });
    it('should fire onFocus', () => {
      render((<RadioButton {...props} onFocus={spy} />));
      const radioButton = screen.getByRole('radio');
      fireEvent.focus(radioButton);
      expect(spy).toHaveBeenCalledTimes(1);
    });
    it('should fire onKeyDown', () => {
      render((<RadioButton {...props} onKeyDown={spy} />));
      const radioButton = screen.getByRole('radio');
      fireEvent.keyDown(radioButton);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});

describe('<RadioButtonGroup />', () => {
  const firstText = 'firstText';
  const secondText = 'secondText';
  const name = 'name';
  const label = 'label';
  const onBlur = jest.fn();
  const onChange = jest.fn();
  const onClick = jest.fn();
  const onFocus = jest.fn();
  const onKeyDown = jest.fn();
  const firstValue = 'firstValue';
  const secondValue = 'secondValue';
  const props = {
    name,
    label,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
  };

  it('renders RadioButtonGroup', () => {
    render(
      <RadioButtonGroup {...props}>
        <RadioButton value={firstValue}>{firstText}</RadioButton>
        <RadioButton value={secondValue}>{secondText}</RadioButton>
      </RadioButtonGroup>,
    );

    const radioButtons = screen.getAllByRole('radio');
    expect(radioButtons.length).toBe(2);

    radioButtons.forEach((radioButton, index) => {
      expect(radioButton).toHaveAttribute('name', name);
      expect(radioButton).toHaveAttribute('value', index === 0 ? firstValue : secondValue);
    });

    const radioButtonGroupDiv = screen.getByRole('radiogroup');
    expect(radioButtonGroupDiv).toBeInTheDocument();
    expect(radioButtonGroupDiv).toHaveAttribute('aria-label', label);
    expect(radioButtonGroupDiv).toHaveAttribute('tabIndex', '-1');
  });
});
