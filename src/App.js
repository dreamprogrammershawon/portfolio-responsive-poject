import Topbar from "./components/topbar/Topbar";
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"

import './App.scss'
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import Testimonials from "./components/testmonials/Testmonials";
import Contact from "./components/contact/Contact";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
<Intro/>
       <Portfolio/>
       <Works/>
<Testimonials/>
<Contact/>
     </div>
    </div>
  );
}

export default App;