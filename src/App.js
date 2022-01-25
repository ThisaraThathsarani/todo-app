import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from './components/Header';
import ToDoList from './components/todoList';
import ToDoButton from './components/add';

function App() {
  return (
    <div className="App">
      <Header />
      <ToDoButton />
      <ToDoList />
      <h1>hhsss</h1>
      <Router>
        <Routes>
          <Route path="/" exact component={ToDoList} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
