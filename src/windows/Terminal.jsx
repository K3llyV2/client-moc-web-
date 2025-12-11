import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {techStack} from "#constants/index.js";
import {Check, ChefHat, Flag} from "lucide-react";
import WindowControls from "#Components/WindowControls.jsx";


const Terminal = () => {
    return < >
        <div id="window-header">
            <WindowControls target="terminal" />
            <p className="font-light">Jasmine </p>   <p className="font-sans">Zuri</p>
            <h2 >Rate Card</h2>
        </div>

        <div className="techstack">
            <p>
                <span className="font-bold">@Jasmine % </span>
                show stack
            </p>
            <div className="label">
                <p className="w-32"> Category</p>
                <p>Technologies</p>
            </div>

            <ul className="content">
                {techStack.map(({category, items}) => (
                    <li
                        key={category}
                        className="flex items-center"
                    >
                       <Check className="check" size={20}/>
                       <h3>{category}</h3>
                        <ul>
                            {items.map((item, i ) => (
                                <li
                                    key={i}
                                >
                                    {item}
                                    {i < items.length - 1 ? "," : "" }
                                </li>
                            ))}
                        </ul>
                    </li>
                    ))}
            </ul>
            <div className="footnote">

                <p className="font-thin text-sm text-gray-500 font-georama">
                    <ChefHat size={15}/>
                    Rates Above are subject to availability and other factors.
                </p>
                <p className="text-black">
                    <Flag size={15} fill="black"/>
                    Prep time: 10 mins
                </p>
            </div>

        </div>
    </>
};

const TerminalWindow = WindowWrapper (Terminal , "terminal");


export default TerminalWindow
