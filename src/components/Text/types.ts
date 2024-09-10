import { CSSProperties, ReactNode } from "react"

export type TextProps = {
    children: ReactNode;
    element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'a' | 'span' | 'label';
    className?: string;
    style?: CSSProperties;
    variant: 'title';
}