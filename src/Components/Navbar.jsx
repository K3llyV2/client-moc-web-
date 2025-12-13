import dayjs from "dayjs";

import React from 'react'
import {navIcons, navLinks} from "#constants/index.js";
import useWindowStore from "#store/window.js";


const Navbar = () => {
    const {openWindow} = useWindowStore();


    return (
        <nav>
            <div className="backdrop-blur-2xl" >
                <img src="/images/knifesvgfinal.svg"
                     alt="logo"
                     className="w-10 "
                     draggable="true"
                     onClick={()=>openWindow('home')}
                />
                <p className="font-thin"> Jasmine<p className="font-medium">Zuri</p> </p>

                <ul>
                    {navLinks.map(({id, name,type}) => (
                        <li key={id} onClick={() => openWindow(type)}>
                            <p>{name}</p>
                        </li>
                        )
                    )}
                </ul>
                <a href="#newpage" title="about" className="font-sans text-medium font-thin" >
                    About me
                </a>
            </div>
            <div>
                <ul>
                    {navIcons.map(({id, img}) => (
                        <li key={id}>
                            <img src={img} className="icon-hover" alt={`icon-${id}`} />
                        </li>
                    ))}
                </ul>

                <time>
                    {dayjs().format("ddd MMM D h:mm A")}
                </time>
            </div>
        </nav>
    )
}
export default Navbar
