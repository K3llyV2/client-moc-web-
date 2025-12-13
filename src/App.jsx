import React from 'react'
import {Navbar, Welcome, Dock, Home} from "#Components";
import {Finder, Resume, Safari, Terminal, Text, Image, Contact, Heropage,NewPage,Educationpage} from "#windows";

import gsap from "gsap";
import {Draggable} from 'gsap/Draggable';


gsap.registerPlugin(Draggable);

const App = () => {
    return (

          <div className="min-h-screen">

              <Navbar/>
              <Heropage/>
              <NewPage/>
              <Educationpage/>

          </div>
    )
}
export default App;
