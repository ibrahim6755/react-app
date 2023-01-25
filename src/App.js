import Home from './pages/Home';
import './App.css';
import CategoryPage from './pages/CategoryPage';
import SellingPage from './pages/SellingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/SignUp/SignUpPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/category' element={<CategoryPage />} />
          <Route path='/top-selling' element={<SellingPage />} />
          <Route path='/sign-up' element={<SignupPage/>}/>
        </Routes>
      </Router>








    </>
  );
}

export default App;
