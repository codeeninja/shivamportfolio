import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import Stockmarket from './Stockmarket';
function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/stock' element={<Stockmarket />}/>
      </Routes>
    </div>

    </>
  );
}

export default App;
