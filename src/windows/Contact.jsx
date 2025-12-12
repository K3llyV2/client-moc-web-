



import WindowWrapper from "#hoc/WindowWrapper.jsx";


const Contact = () => {
    return (
        <>
            <div id="window-header" >
                <h2>Contact Me</h2>
            </div>
            <div className="p-5">

            </div>
        </>
    )
}

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow
