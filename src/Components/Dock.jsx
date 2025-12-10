import {useRef} from "react";
import {dockApps} from "#constants/index.js";
import {Tooltip} from "react-tooltip";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import useWindowStore from "#store/window.js";

const Dock = () => {

    const {openWindow, closeWindow, windows, focusWindow} = useWindowStore();
    const dockRef = useRef(null);

    useGSAP(()=>{
        const dock = dockRef.current;
        if (! dock )return;

        const icons = dock.querySelectorAll(".dock-icon");

        const animateIcons = (mouseY) =>{
            const {top} = dock.getBoundingClientRect();

            icons.forEach((icon)=>{
               const {top:iconTop, height} = icon.getBoundingClientRect();
               const center = iconTop - top + height/2;
               const distance = Math.abs(mouseY - center);

               const intensity = Math.exp(-(distance ** 2.5)/20000);

                gsap.to(icon,{
                    scale: 1 + 0.25 * intensity,
                    x: 15 * intensity,
                    duration:0.2,
                    ease: "power1.out",
                });
            });
         };

        const handleMouseMove = (e) => {
            const {top} = dock.getBoundingClientRect();

            animateIcons(e.clientY - top);
        };

        const resetIcons = () => icons.forEach((icon)=>gsap.to(icon,{
            scale: 1,
            x:0,
            duration:0.2,
            ease: "power1.out",
        }),
        );

        dock.addEventListener("mousemove", handleMouseMove);
        dock.addEventListener("mouseleave", resetIcons);

        return () => {
          dock.removeEventListener("mousemove", handleMouseMove);
          dock.removeEventListener("mouseleave", resetIcons);
        };
    },[]);



    const toggleApp = (app) => {
        if(!app.canOpen)return;

        const window = windows[app.id];

        if (!window){
            console.error(`Window not found for app:${ app.id } `);
        }

        if(window.isOpen){
            closeWindow(app.id);
        }else{
            openWindow(app.id);
        }
    };

    return (
       <section id = "dock">
       <div ref={dockRef} className="dock-container">
           {dockApps.map(
               ({id, name, icon, canOpen}) => (
                   <div key={id} className= "relative flex justify-center">
                       <button
                           type="button"
                           className="dock-icon"
                           aria-label={name}
                           data-tooltip-id="dock-tooltip"
                           data-tooltip-content={name}
                           data-tooltip-show={150}
                           disabled={!canOpen}
                           onClick={()=>toggleApp({id, canOpen})}
                       >
                           <img
                               src={`/images/${icon}`}
                               alt={name}
                               loading="lazy"
                               className={canOpen ? "" : "opacity-60 "}
                           />
                       </button>
                   </div>
               )
           )}
           <Tooltip id="dock-tooltip" place="right"  className="tooltip"/>
       </div>
       </section>
    )
}
export default Dock
