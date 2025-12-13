
import { Briefcase, Code, User } from "lucide-react";

const NewPage = () => {
    return (
        <section id="newpage" className=" py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-4xl md:text-4xl font-thin mb-12 text-center">
                    About <span className="font-thin"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-semibold">
                            Passionate Chef
                        </h3>

                        <p className="font-thin font-georama border-1 p-4 rounded-lg text-justify leading-relaxed bg-amber-400">
                            I am a culinary arts chef driven by a deep respect for technique,
                            flavor, and presentation.<br/><br/>
                            My approach to cooking blends classical foundations with modern creativity, allowing me to craft dishes that are both refined and expressive. With experience across diverse cuisines and service styles, I focus on precision, consistency, and thoughtful execution in every plate.<br/><br/>
                            For me, cooking is not only a profession but a craft — one where passion, discipline, and detail come together to create memorable dining experiences.
                        </p>
                        <div className="flex sm:flex-row gap-6 pt-6 justify-center ">
                            <a
                                href="files/resume.pdf"
                                className="px-2 py-3 rounded-full border border-primary text-primary fill-amber-200 hover:bg-amber-200 hover:text-primary transition-all duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 gap-6 rounded-3xl overflow-hidden shadow-lime-400">
                       <img
                            src="/public/cartoons/womanchef.jpg"
                            title="woman"
                       />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NewPage;