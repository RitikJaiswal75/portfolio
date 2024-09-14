export type ToggleButtonProps = {
    text: "About Me" | "My Experiences" | "Recognitions";
}

export type ToggleContainerProps = {
    setActiveScreen: (screenName: string) => void;
}