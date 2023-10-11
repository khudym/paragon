import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CheckBox from './index';

describe('<CheckBox />', () => {
  it('attributes are set correctly', () => {
    const { getByLabelText } = render(<CheckBox name="checkbox" label="check me out!" />);
    const checkbox = getByLabelText('check me out!');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('type', 'checkbox');
    expect(checkbox).not.toBeChecked();
    expect(checkbox).toHaveAttribute('aria-checked', 'false');
  });

  it('aria-label changes after click', () => {
    const { getByLabelText } = render(<CheckBox name="checkbox" label="check me out!" />);
    const checkbox = getByLabelText('check me out!');
    expect(checkbox).toHaveAttribute('aria-checked', 'false');
    fireEvent.click(checkbox);
    expect(checkbox).toHaveAttribute('aria-checked', 'true');
    fireEvent.click(checkbox);
    expect(checkbox).toHaveAttribute('aria-checked', 'false');
  });

  it('check that callback function is triggered when clicked', () => {
    const onChangeSpy = jest.fn();
    const { getByLabelText } = render(<CheckBox name="checkbox" label="check me out!" onChange={onChangeSpy} />);
    const checkbox = getByLabelText('check me out!');
    expect(onChangeSpy).toHaveBeenCalledTimes(0);
    fireEvent.click(checkbox);
    expect(onChangeSpy).toHaveBeenCalledTimes(1);
    expect(onChangeSpy).toHaveBeenCalledWith(true, 'checkbox');
    fireEvent.click(checkbox);
    expect(onChangeSpy).toHaveBeenCalledTimes(2);
    expect(onChangeSpy).toHaveBeenCalledWith(false, 'checkbox');
  });

  it('checks if start state can be set to checked', () => {
    const { getByLabelText } = render(<CheckBox name="checkbox" label="I start checked" checked />);
    const checkbox = getByLabelText('I start checked');
    expect(checkbox).toBeChecked();
    expect(checkbox).toHaveAttribute('aria-checked', 'true');
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(checkbox).toHaveAttribute('aria-checked', 'false');
  });

  it('checkbox can be disabled', () => {
    const { getByLabelText } = render(<CheckBox name="checkbox" label="I am disabled" disabled />);
    const checkbox = getByLabelText('I am disabled');
    expect(checkbox).toBeDisabled();
    fireEvent.click(checkbox);
    expect(checkbox).toBeDisabled();
  });

  it('overrides state value when props value changes', () => {
    const { getByLabelText, rerender } = render(<CheckBox name="checkbox" label="I start checked" checked />);
    const checkbox = getByLabelText('I start checked');
    expect(checkbox).toBeChecked();
    rerender(<CheckBox name="checkbox" label="I start checked" checked={false} />);
    expect(checkbox).not.toBeChecked();
  });
});
