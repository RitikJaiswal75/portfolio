import { Routes, Route, Navigate } from 'react-router-dom'
import AboutMe from "./AboutMe"
import Toggles from "./Toggles"
import Experience from "./Experience"
import Recognition from "./Recognition"

function About() {
    return (
        <section id='experience' className="w-full flex flex-col md:flex-row border-2 border-slate-200 rounded-xl px-4 shadow-[.5rem_.5rem_1rem_rgb(79,76,76)] sm:gap-8 my-8">
            <Toggles />
            <div className="sm:w-4/5 max-h-[80vh] min-h-[55vh] lg:min-h-[20vh] xl:min-h-[15vh] overflow-y-auto">
                <Routes>
                    <Route path="/" element={<Navigate to='/experience' />} />
                    <Route path="/about" element={<AboutMe />} />
                    <Route path="/recognitions" element={<Recognition />} />
                    <Route path="/experience" element={<Experience />} />
                </Routes>
            </div>
        </section>
    )
}

export default About
