import { useState } from "react"
import AboutMe from "./AboutMe"
import Toggles from "./Toggles"
import Experience from "./Experience"
import Recognition from "./Recognition"

const availableScreens = {
    ABOUT: 'About Me',
    EXPERIENCE: 'My Experiences',
    RECOGNITIONS: 'Recognitions'
}

function About() {
    const [activeScreen, setActiveScreen] = useState(availableScreens.EXPERIENCE)
    return (
        <section id='experience' className="w-full flex flex-col md:flex-row border-2 border-slate-200 rounded-xl px-4 shadow-[.5rem_.5rem_1rem_rgb(79,76,76)] sm:gap-8 my-8">
            <Toggles setActiveScreen={setActiveScreen} />
            <div className="sm:w-4/5 max-h-[80vh] overflow-y-auto">
                {activeScreen === availableScreens.ABOUT ? <AboutMe /> : null}
                {activeScreen === availableScreens.EXPERIENCE ? <Experience /> : null}
                {activeScreen === availableScreens.RECOGNITIONS ? <Recognition /> : null}
            </div>
        </section>
    )
}

export default About
