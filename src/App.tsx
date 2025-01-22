import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { InputField } from './components/InputField/InputField';
import { TodoList } from './components/TodoList/TodoList';
import { activeListName, TaskList } from './types/types';

function App() {
  const [activeList, setActiveList] = useState<activeListName>('all');
  const [list, setList] = useState<TaskList>([
    { text: 'Тестовое задание', state: 'active', id: 'Тестовое задание' },
    { text: 'Прекрасный код', state: 'completed', id: 'Прекрасный код' },
    { text: 'Покрытие тестами', state: 'active', id: 'Покрытие тестами' },
  ]);

  return (
    <div className="app-layout">
      <Header />
      <div className="app-content--wrapper">
        <InputField setList={setList} />
        <TodoList setList={setList} activeList={activeList} taskList={list} />
        <Footer
          setList={setList}
          list={list}
          setActiveList={setActiveList}
          activeList={activeList}
        />
      </div>
    </div>
  );
}

export default App;
