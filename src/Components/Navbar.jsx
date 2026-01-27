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
                        className="w-15 cursor-pointer "
                        draggable="true"
                        onClick={()=>openWindow('home')}
                    />
                    <p className="font-thin "> Jasmine<span className="font-medium ">Zuri</span> </p>

                    <ul className="px-15 font-thin "> 
                        {navLinks.map(({id, name,type}) => (
                            <li key={id} onClick={() => openWindow(type)}>
                                <p>{name}</p>
                            </li>
                            )
                        )}
                    </ul>
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
