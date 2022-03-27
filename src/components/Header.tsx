import { JSX } from "solid-js";

interface HeaderProps {
    children?: JSX.Element[] | JSX.Element;
    className?: string;
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default ({ children, className, type }: HeaderProps) => {
    const baseClasses = `${className ? className : ""} leading-tight font-header`
    switch(type) {
        case "h1":
            return (
                <h1 className={`text-8xl <md:text-7xl ${baseClasses}`}>{children}</h1>
            );
        case "h2":
            return (
                <h2 className={`text-7xl <md:text-6xl ${baseClasses}`}>{children}</h2>
            );
        case "h3":
            return (
                <h3 className={`text-6xl <md:text-5xl ${baseClasses}`}>{children}</h3>
            );
        case "h4":
            return (
                <h4 className={`text-5xl <md:text-4xl ${baseClasses}`}>{children}</h4>
            );
        case "h5":
            return (
                <h5 className={`text-4xl <md:text-3xl ${baseClasses}`}>{children}</h5>
            );
        case "h6":
            return (
                <h6 className={`text-3xl <md:text-2xl ${baseClasses}`}>{children}</h6>
            );

        default:
            return (<p>Specified header type unsupported. You shouldn't be seeing this error.</p>);
    }
};