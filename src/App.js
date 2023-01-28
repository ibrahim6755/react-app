import Home from './pages/Home';
import './App.css';
import SellingPage from './pages/Selling/SellingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/SignUp/SignUpPage';
import EverydayPage from './pages/Everyday/EverydayPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/top-selling' element={<SellingPage />} />
          <Route path='/sign-up' element={<SignupPage/>}/>
          <Route path='/everyday-value' element={<EverydayPage/>}/>
        </Routes>
      </Router>








    </>
  );
}

export default App;
