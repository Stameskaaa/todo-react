import { fireEvent, render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { TaskList } from '../../types/types';

const mockList: TaskList = [
  { id: '1', text: 'Task 1', state: 'active' },
  { id: '2', text: 'Task 2', state: 'completed' },
  { id: '3', text: 'Task 3', state: 'active' },
];

const setActiveListMock = jest.fn();
const setListMock = jest.fn();

describe('Footer Component', () => {
  it('render correct number of items', () => {
    render(
      <Footer
        activeList="all"
        setActiveList={setActiveListMock}
        list={mockList}
        setList={setListMock}
      />,
    );

    expect(screen.getByText('2 items left')).toBeInTheDocument();
  });

  it('change active list when button is clicked', () => {
    render(
      <Footer
        activeList="all"
        setActiveList={setActiveListMock}
        list={mockList}
        setList={setListMock}
      />,
    );

    fireEvent.click(screen.getByText('Active'));
    expect(setActiveListMock).toHaveBeenCalledWith('active');

    fireEvent.click(screen.getByText('Completed'));
    expect(setActiveListMock).toHaveBeenCalledWith('completed');
  });

  it('clear completed tasks when button is clicked', () => {
    render(
      <Footer
        activeList="all"
        setActiveList={setActiveListMock}
        list={mockList}
        setList={setListMock}
      />,
    );

    fireEvent.click(screen.getByText('Clear completed'));
    expect(setListMock).toHaveBeenCalledWith(expect.any(Function));
  });
});
