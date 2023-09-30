
// import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile'
import Service from './components/Services/Service';
import Product from './components/Product/Product';
import Superior from './components/Superior/Superior';
import Support from './components/Support/Support';
import Partnership from './components/Partnership/Partnership';
import Quotes from './components/Quotes/Quotes';
import Invitation from './components/Invitation/Invitation';
import Footer from './components/Footer/Footer';
import Copyright from './components/Footer/Copyright';
import { useEffect, useState } from 'react';

function App() {
  const [dimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const resize = () => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])


  return (
    <div>
      <Navbar width={dimension.width} />
      <Profile />
      <Service width={dimension.width}/>
      <Product width={dimension.width}/>
      <Superior />
      <Support width={dimension.width} />
      <Partnership width={dimension.width}/>
      <Quotes />
      <Invitation />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
