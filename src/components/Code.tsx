import { JSX } from "solid-js";

interface CodeProps {
    children?: JSX.Element[] | JSX.Element;
    className?: string;
}

export default ({ children, className }: CodeProps) => {
    return (
        <code className={`${className ? className : ""} bg-light-secondary text-dark-primary font-mono rounded dark:(bg-dark-secondary text-light-primary)`}>{children}</code>
    );
};