import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {socials} from "#constants/index.js";
import {WindowControls} from "#Components/index.js";




const Contact = () => {
    return (
        <>
            <div id="window-header" >
                <WindowControls target="contact"/>
                <h2>Contact Me</h2>
            </div>
            <div className="p-5 space-y-5">
                <img
                    src="/images/adrian.jpg"
                    alt="Adrian"
                    className="w-20 rounded-full"
                />

                <h3>Contact ME!!!!!!</h3>
                <p className="font-thin ">Got an idea we cook it up together</p>
                <p>contact@
                    <a href="https://kellymemzy@gmail.com" title="Email" target="_blank" rel="noopener noreferrer">
                        kellymemzy@gmail.com
                    </a></p>

                <ul>
                    {socials.map(({id, bg, link, icon, text })=>(
                        <li
                            key={id}
                            style={{backgroundColor: bg}}
                        >
                            <a  href={link} target="_blank" rel="noopener noreferrer" title={text}>
                                <img src={icon} alt={text} className="size-5"/>
                            </a>
                            <p>{text}</p>
                        </li>
                        )
                    )}
                </ul>
            </div>
        </>
    )
}

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow
