import Home from './pages/Home';
import './App.css';
import CategoryPage from './pages/CategoryPage';
import SellingPage from './pages/SellingPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/category' element={<CategoryPage/>}/>
        <Route path='/top-selling' element={<SellingPage />}/>
      </Routes>
    </Router>
      


      
      
      


    </>
  );
}

export default App;
