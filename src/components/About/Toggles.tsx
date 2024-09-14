import ToggleButton from "./ToggleButton"

function Toggles() {
    return (
        <div className="flex sm:flex-col sm:w-1/5 sm:py-2 sm:gap-8 items-center justify-center">
            <ToggleButton text="About Me" />
            <ToggleButton text="My Experiences" />
            <ToggleButton text="Recognitions" />
        </div>
    )
}

export default Toggles
