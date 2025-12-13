import React from 'react'
import Dock from "#Components/Dock";
import Welcome from "#Components/Welcome";
import Terminal from "#windows/Terminal";
import Safari from "#windows/Safari";
import Resume from "#windows/Resume";
import Finder from "#windows/Finder";
import Text from "#windows/Text";
import Image from "#windows/Image";
import Contact from "#windows/Contact";
import Home from "#Components/Home";

const Heropage = () => {
    return (

        <main  id="heropage">
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
export default Heropage;
