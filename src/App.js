import logo from './logo.svg';
import Home from './pages/Home2';
import Question from './pages/Question2';
import Result from './pages/Result2';
import {Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/question2' element={<Question/>} />
      <Route path='/result2' element={<Result/>} />
    </Routes>
    );
}

export default App;
