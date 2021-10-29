// i dislike this component. oh well.

export default function({ children }) {
    return (
        <>
        <code class="block p-6 mt-6 mb-3 whitespace-pre bg-light-600 dark:bg-dark-100 w-full overflow-hidden shadow-md <md:whitespace-normal">{children}</code>
        <p class="text-xs mb-6 text-dark-50">Remind me to fix my codeblock component...</p>
        </>
    )
}