import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Resources from './components/Resources';
import Socials from './components/Socials';
import Projects from './components/Projects';
import Business from './components/Business';
import Tools from './components/Tools';
// import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Navbar/>
        <div>
          <Routes>
            <Route index element={<Resources/>}>
            </Route>
            <Route path='/Socials' element={<Socials/>}></Route>
            <Route path='/Projects' element={<Projects/>}></Route>
            <Route path='/Business' element={<Business/>}></Route>
            <Route path='/Tools' element={<Tools/>}></Route>
          </Routes>
        </div>
        {/* <Footer/> */}
        
      </div>
    </Router>
  );
}

export default App;
