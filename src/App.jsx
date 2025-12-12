import React from 'react'
import {Navbar, Welcome, Dock, Home} from "#Components";
import {Finder, Resume, Safari, Terminal, Text, Image, Contact} from "#windows"

import gsap from "gsap";
import {Draggable} from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const App = () => {
    return (
      <main>
          <Navbar/>
          <Welcome/>
          <Dock/>

          <Terminal/>
          <Safari/>
          <Resume/>
          <Finder/>
          <Text/>
          <Image/>
          <Contact/>
          <Home/>
      </main>
    )
}
export default App;
