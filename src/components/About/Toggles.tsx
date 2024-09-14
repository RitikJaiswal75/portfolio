import ToggleButton from "./ToggleButton"
import { ToggleContainerProps } from "./types"

function Toggles({ setActiveScreen }: ToggleContainerProps) {
    return (
        <div className="flex sm:flex-col sm:w-1/5 sm:py-2 sm:gap-8 items-center justify-center">
            <ToggleButton text="About Me" setActiveScreen={setActiveScreen} />
            <ToggleButton text="My Experiences" setActiveScreen={setActiveScreen} />
            <ToggleButton text="Recognitions" setActiveScreen={setActiveScreen} />
        </div>
    )
}

export default Toggles
