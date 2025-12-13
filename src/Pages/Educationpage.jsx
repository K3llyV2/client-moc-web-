import React from 'react'

const Educationpage = () => {
    return (
        <div id="education" className=" py-20 px-4 relative bg-gradient-to-r from-purple-400 to-amber-300">

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-4xl md:text-4xl font-thin mb-12 text-center">
                     Education<span className="font-thin"> & Experience</span>
                </h2>

                <div className="space-y-6 flex flex-col md:flex-row gap-12 items-center ">
                    <div>
                        <img
                        src="/public/cartoons/foodpan.jpg"
                        title="food"
                        alt="food"
                        className=" w-full object-cover rounded-3xl shadow-lime-400"
                        />
                    </div>
                    <div className="space-y-20">
                        <p className="font-thin font-georama border-none p-4 rounded-lg text-justify leading-relaxed text-white backdrop-grayscale-30 backdrop-blur-3xl">
                            <h1 className="text-4xl p-3 text-orange-400 ">Education</h1>

                            Diploma / Degree in Culinary Arts
                            Institution Name
                            Year – Year<br/>
                            <br/>

                            My formal training in culinary arts provided a strong foundation in classical cooking techniques, kitchen operations, food safety, and menu development. During my studies, I developed a disciplined approach to cooking, emphasizing precision, consistency, and respect for ingredients while exploring a wide range of global cuisines.
                        </p>
                        <p className="font-thin font-georama border-none p-4 rounded-lg text-justify leading-relaxed text-white backdrop-grayscale-30 backdrop-blur-3xl">
                            <h1 className="text-4xl p-3 text-purple-500">Experience</h1>

                            Culinary Arts Chef
                            Restaurant / Hotel / Catering Company Name
                            Year – Present

                            I have hands-on experience working in fast-paced professional kitchen environments, contributing to menu execution, food preparation, plating, and service. My role involves maintaining high standards of quality and hygiene while collaborating closely with kitchen teams to deliver exceptional dining experiences. I take pride in balancing creativity with efficiency, ensuring every dish meets both visual and flavor expectations.

                            Additional Experience
                            Internships / Events / Private Catering / Freelance Work

                            Through internships, events, and private catering opportunities, I have expanded my skills in menu planning, guest-focused service, and adaptability under pressure. These experiences have strengthened my ability to work independently and as part of a team, while continuously refining my culinary identity.  </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Educationpage;
