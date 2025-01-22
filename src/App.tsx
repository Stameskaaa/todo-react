import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { InputField } from './components/InputField/InputField';
import { TodoList } from './components/TodoList/TodoList';

function App() {
  return (
    <div className="app-layout">
      <Header />
      <div className="app-content--wrapper">
        <InputField />
        <TodoList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
