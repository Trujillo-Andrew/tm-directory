import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Socials from './components/Socials'
import Projects from './components/Projects'
import Business from './components/Business'


function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Navbar/>
        <div>
          <Routes>
            <Route index element={<Home/>}>
            </Route>
            <Route path='/Socials' element={<Socials/>}></Route>
            <Route path='/Projects' element={<Projects/>}></Route>
            <Route path='/Business' element={<Business/>}></Route>
          </Routes>
        </div>
        {/* <Footer/> */}
        
      </div>
    </Router>
  );
}

export default App;
