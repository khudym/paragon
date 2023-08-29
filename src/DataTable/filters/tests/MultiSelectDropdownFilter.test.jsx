import React from 'react';
import {
  render, fireEvent, screen, act,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MultiSelectDropdownFilter from '../MultiSelectDropdownFilter';

const setFilterMock = jest.fn();
const roan = { name: 'roan', number: 3, value: '10' };
const palomino = { name: 'palomino', value: '2' };
const props = {
  column: {
    filterValue: [],
    setFilter: setFilterMock,
    Header: 'Horse colors',
    filterChoices: [
      roan,
      palomino,
      { name: 'dappled grey', number: 4, value: '7' },
    ],
    getHeaderProps: () => ({ key: 'foo' }),
  },
};

describe('<MultiSelectDropdownFilter />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('renders a list of checkboxes', async () => {
    render(<MultiSelectDropdownFilter {...props} />);
    fireEvent.click(screen.getByText(props.column.Header));
    await act(async () => {
      const checkboxes = screen.getAllByRole('checkbox');
      expect(checkboxes.length).toEqual(3);
    });
  });
  it('renders a title', () => {
    render(<MultiSelectDropdownFilter {...props} />);
    expect(screen.getByText(props.column.Header)).toBeInTheDocument();
  });
  it('sets a filter - no initial filters', async () => {
    render(<MultiSelectDropdownFilter {...props} />);
    fireEvent.click(screen.getByText(props.column.Header));
    const checkbox = screen.getAllByRole('checkbox')[1];
    await act(async () => {
      fireEvent.click(checkbox);
    });
    expect(setFilterMock).toHaveBeenCalledWith([palomino.value]);
  });
  it('sets a filter - initial filters', async () => {
    render(<MultiSelectDropdownFilter column={{ ...props.column, filterValue: [roan.value] }} />);
    fireEvent.click(screen.getByText(props.column.Header));
    const checkbox = screen.getAllByRole('checkbox')[1];
    await act(async () => {
      fireEvent.click(checkbox);
    });
    expect(setFilterMock).toHaveBeenCalledWith([roan.value, palomino.value]);
  });
  it('removes a filter', async () => {
    render(<MultiSelectDropdownFilter column={{ ...props.column, filterValue: [palomino.value] }} />);
    fireEvent.click(screen.getByText(props.column.Header));
    const checkbox = screen.getAllByRole('checkbox')[1];
    await act(async () => {
      fireEvent.click(checkbox);
    });
    expect(setFilterMock).toHaveBeenCalledWith([]);
  });
  it('renders checkbox label with filter name', async () => {
    render(<MultiSelectDropdownFilter column={{ ...props.column, filterValue: [roan.value] }} />);
    fireEvent.click(screen.getByText(props.column.Header));
    await act(async () => {
      const label = screen.getByText(roan.name);
      expect(label).toBeInTheDocument();
    });
  });
  it('renders checkbox label with number - with badge', async () => {
    render(<MultiSelectDropdownFilter column={{ ...props.column, filterValue: [roan.value] }} />);
    fireEvent.click(screen.getByText(props.column.Header));
    await act(async () => {
      const label = screen.getByText(roan.name);
      expect(label).toBeInTheDocument();
      const badge = screen.getByText(roan.number.toString());
      expect(badge).toBeInTheDocument();
    });
  });
  it('renders checkbox label with number - without badge', async () => {
    render(
      <MultiSelectDropdownFilter column={{ ...props.column, filterValue: [roan.value] }} />,
    );
    fireEvent.click(screen.getByText(props.column.Header));
    await act(async () => {
      const label = screen.getByText(palomino.name);
      expect(label).toBeInTheDocument();
      expect(label.querySelector('.badge')).toBeNull();
    });
  });
});
