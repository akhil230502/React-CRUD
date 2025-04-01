
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Nopage from './Pages/Nopage';
import 'bootstrap/dist/css/bootstrap.min.css'
import Productsview from './Pages/Productsview';
import EditUser from './Pages/EditUser';
import Employee from './Pages/Employee';
import Header from './Components/Header';


function App() {
  console.log("hello");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={[<Header />, <Home />]} />
          <Route path='home' element={[<Header />, <Home />]} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<Nopage />} />
          <Route path='/employee' element={<Employee />} />
          <Route path="/products/:id" element={<Productsview />} />
          <Route path="/edituser/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
