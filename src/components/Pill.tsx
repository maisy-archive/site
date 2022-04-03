import { JSX } from "solid-js";

interface PillProps {
    children?: JSX.Element[] | JSX.Element;
    className?: string;
    src: string;
    alt?: string;
}

export default ({ children, className, src, alt }: PillProps) => {
    return (
        <div className="transition-all w-auto mb-2 md:mr-2 p-2 bg-light-tertiary rounded-lg border-2 border-light-quarternary dark:(bg-dark-secondary border-dark-tertiary)">
            <img className="transition-all mr-2 inline-block align-middle dark:(filter invert)" width="40" height="40" src={src} alt={alt}/>
            <span>{children}</span>
        </div>
    );
};
