interface CodeProps {
    children?: string;
    className?: string;
}

export default ({ children, className }: CodeProps) => {
    return (
        <code className={`bg-light-secondary text-dark-primary font-mono rounded dark:(bg-dark-secondary text-light-primary)${className ? " " + className : ""}`}>{children}</code>
    );
};