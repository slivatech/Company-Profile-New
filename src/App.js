
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile'
import Service from './components/Services/Service';
import Product from './components/Product/Product';
import Superior from './components/Superior/Superior';
import Support from './components/Support/Support';

function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <Service />
      <Product />
      <Superior />
      <Support />
    </div>
  );
}

export default App;
