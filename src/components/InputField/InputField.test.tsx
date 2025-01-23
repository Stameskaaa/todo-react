import { fireEvent, render, screen } from '@testing-library/react';
import { InputField } from './InputField';

describe('InputFiled Component', () => {
  it('renders the inputField and butt', () => {
    render(<InputField setList={jest.fn()} />);
    expect(screen.getByPlaceholderText('What needs to be done?')).toBeTruthy();
    expect(screen.getByRole('button')).toBeTruthy();
  });

  it('updates value on change input', () => {
    render(<InputField setList={jest.fn()} />);
    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'Test Task' } });
    expect(input).toHaveValue('Test Task');
  });

  it('add task on press Enter', () => {
    const setList = jest.fn();
    render(<InputField setList={setList} />);
    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'Test Task' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(setList).toHaveBeenCalled();
  });
});
