import { NavLink } from "solid-app-router";

interface PillProps {
    children?: string;
    className?: string;
    src: string;
    alt?: string;
}

export default ({ children, className, src, alt }: PillProps) => {
    return (
        <div className="transition-all w-auto mb-2 p-2 bg-light-tertiary shadow-current dark:(bg-dark-secondary)">
            <img className="transition-all mr-2 inline-block align-middle dark:(filter invert)" width="50" height="50" src={src} alt={alt}/>
            <span>{children}</span>
        </div>
    );
};