import Home from './pages/Home';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
