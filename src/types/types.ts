export interface Task {
  text: string;
  state: TaskState;
  id: string;
}

export type TaskState = 'active' | 'completed';

export type TaskList = Task[];

export type activeListName = 'all' | 'active' | 'completed';
