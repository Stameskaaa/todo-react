import { render, screen } from '@testing-library/react';
import { TodoList } from './TodoList';
import { TaskList } from '../../types/types';

const mockList: TaskList = [
  { id: '1', text: 'Task 1', state: 'active' },
  { id: '2', text: 'Task 2', state: 'completed' },
  { id: '3', text: 'Task 3', state: 'active' },
];

const setListMock = jest.fn();

describe('TodoList component', () => {
  it('all tasks active', () => {
    render(<TodoList taskList={mockList} activeList="all" setList={setListMock} />);

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
    expect(screen.getByText('Task 3')).toBeInTheDocument();
  });

  it('active tasks active', () => {
    render(<TodoList taskList={mockList} activeList="active" setList={setListMock} />);

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 3')).toBeInTheDocument();
    expect(screen.queryByText('Task 2')).not.toBeInTheDocument();
  });

  it('completed tasks active', () => {
    render(<TodoList taskList={mockList} activeList="completed" setList={setListMock} />);

    expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Task 3')).not.toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });
});
