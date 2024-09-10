import { TextProps } from "./types"
import { textVariants } from "./recipe";

function Text({ variant, element, className, children }: TextProps) {
    const Element = element;
    return (
        <Element className={`${textVariants[variant]} ${className}`}>
            {children}
        </Element>
    )
}

export default Text
