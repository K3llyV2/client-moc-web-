import React from 'react'
import {Navbar, Welcome, Dock, Home} from "#Components";
import {Finder, Resume, Safari, Terminal, Text, Image, Contact, Heropage,NewPage,Educationpage,Contactpage, Footer} from "#windows";

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

             add sliding div with the schhools and the hotels shes worked at <br/><br/> 

             also add the internship cards /like projects explaining in depth what she learnt and skills gained/ 

              <Contactpage/>


              <Footer/>

          </div>
    )
}
export default App;
