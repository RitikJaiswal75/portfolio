import { ToggleButtonProps } from "./types"

function ToggleButton({ text, setActiveScreen }: ToggleButtonProps) {
    return (
        <button className="sm:border-2 sm:border-slate-200 sm:rounded-xl px-4 hover:scale-105 transition ease-in-out sm:shadow-[.5rem_.5rem_1rem_rgb(79,76,76)] underline text-[#c79c18] sm:text-white sm:no-underline p-4 cursor-pointer sm:w-full" onClick={() => setActiveScreen(text)}>
            {text}
        </button>
    )
}

export default ToggleButton
