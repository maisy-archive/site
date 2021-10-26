export default function({ children, href, target }) {
    return (
        <a class="underline text-dark-50 underline-dark-50 dark:(text-light-50 underline-light-50)" href={href} target={target}>{children}</a>
    )
}