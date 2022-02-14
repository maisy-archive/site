interface HeaderProps {
    children?: string;
    className?: string;
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default ({ children, className, type }: HeaderProps) => {
    switch(type) {
        case "h1":
            return (
                <h1 className={`text-8xl font-header ${className}`}>{children}</h1>
            );
        case "h2":
            return (
                <h2 className={`text-7xl font-header ${className}`}>{children}</h2>
            );
        case "h3":
            return (
                <h3 className={`text-6xl font-header ${className}`}>{children}</h3>
            );
        case "h4":
            return (
                <h4 className={`text-5xl font-header ${className}`}>{children}</h4>
            );
        case "h5":
            return (
                <h5 className={`text-4xl font-header ${className}`}>{children}</h5>
            );
        case "h6":
            return (
                <h6 className={`text-3xl font-header ${className}`}>{children}</h6>
            );

        default:
            return (<p>Specified header type unsupported. You shouldn't be seeing this error.</p>);
    }
};