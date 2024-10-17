import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {LinkType} from './components/Navbar';

import Layout from "./components/Layout/index";
import Nosotros from './pages/Nosotros';
import AreaFabrica from "./pages/Areas/fabrica";
import AreaContenidos from "./pages/Areas/contenidos";
import AreaIndustrias from "./pages/Areas/industrias";
import PortaFabrica from "./pages/Portafolio/fabrica";
import PortaContenidos from "./pages/Portafolio/contenidos";
import PortaIndustrias from "./pages/Portafolio/industrias";
import Contatanos from "./pages/Contacto/index";
import Home from "./pages/Home/index";


const App = () => {
  const links: LinkType[] = [
    {name: 'Sobre Nosotros', url: '/nosotros'},
    {
      name: 'Áreas de Desarrollo', isDropdown: true, subLinks: [
        { name: 'Fábrica de Software', url: '/areas/fabrica' },
        { name: 'Industrias 4.0', url: '/areas/industrias' },
        { name: 'Contenidos Digitales', url: '/areas/contenidos' },
      ]
    },
    {
      name: 'Portafolio', isDropdown: true, subLinks: [
        { name: 'Fábrica de Software', url: '/portafolio/fabrica' },
        { name: 'Industrias 4.0', url: '/portafolio/industrias' },
        { name: 'Contenidos Digitales', url: '/portafolio/contenidos' },
      ]
    },
    {name: 'Contáctanos', url: '/contacto'},
  ];
  return (
    <Router>
      <Layout links={links}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route path="/areas/fabrica" element={<AreaFabrica/>}/>
          <Route path="/areas/contenidos" element={<AreaContenidos/>}/>
          <Route path="/areas/industrias" element={<AreaIndustrias/>}/>
          <Route path="/portafolio/fabrica" element={<PortaFabrica/>}/>
          <Route path="/portafolio/contenidos" element={<PortaContenidos/>}/>
          <Route path="/portafolio/industrias" element={<PortaIndustrias/>}/>
          <Route path="/contacto" element={<Contatanos/>}/>
          <Route path="*" element={<h1>Not found</h1>}/>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;