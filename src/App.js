import Home from './pages/Home';
import './App.css';
import CategoryPage from './pages/Category/CategoryPage';
import SellingPage from './pages/Selling/SellingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/SignUp/SignUpPage';
import Everyday from './components/Everyday';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category' element={<CategoryPage />} />
          <Route path='/top-selling' element={<SellingPage />} />
          <Route path='/sign-up' element={<SignupPage/>}/>
          <Route path='/everyday-value' element={<Everyday/>}/>
        </Routes>
      </Router>








    </>
  );
}

export default App;
