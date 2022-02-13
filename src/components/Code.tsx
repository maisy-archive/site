interface CodeProps {
    children?: string;
}

export default ({ children }: CodeProps) => {
    return (
        <code class="bg-light-secondary text-dark-primary font-mono rounded dark:(bg-dark-secondary text-light-primary)">{children}</code>
    );
};