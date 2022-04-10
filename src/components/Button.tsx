import { JSX } from "solid-js";

interface ButtonProps {
    children?: JSX.Element[] | JSX.Element;
    className?: string;
    onClick: () => void;
}

export default ({ children, className, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className="transition-all w-auto p-2 bg-light-tertiary shadow shadow-light-quarternary dark:(bg-dark-secondary shadow-dark-secondary) hover:(bg-accent shadow-accent)">
            {children}
        </button>
    );
};
