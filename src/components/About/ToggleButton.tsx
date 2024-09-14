import { NavLink } from "react-router-dom"
import { ToggleButtonProps } from "./types"

const textToKeyMapper = {
    'About Me': 'about',
    'My Experiences': 'experience',
    'Recognitions': 'recognitions'
};

function ToggleButton({ text }: ToggleButtonProps) {
    const className = "sm:border-2 sm:border-slate-200 sm:rounded-xl px-4 hover:scale-105 transition ease-in-out sm:shadow-[.5rem_.5rem_1rem_rgb(79,76,76)] p-4 cursor-pointer sm:w-full text-center"
    return (
        <>
            <NavLink to={textToKeyMapper[text]} className={({ isActive }) => !isActive ? `${className} text-[#c79c18] sm:text-white` : `${className} text-white underline sm:bg-slate-200 sm:text-black sm:no-underline`} >
                {text}
            </NavLink>
        </>
    )
}

export default ToggleButton
