import Hyperlink from "../../components/Hyperlink";

// TODO: this is bad

export default function() {
    return (
        <>
            <div class="mb-6">
                <h1 class="text-4xl mb-2">My suffering with <code>solid-app-router</code></h1>
                <p>And why I think you <em>should</em> use it!</p>
            </div>
            <div>
                <div class="mb-6">
                    <h2 class="text-2xl mb-2">What is it?</h2>
                    <p><Hyperlink href="//github.com/solidjs/solid-app-router" target="_blank"><code>solid-app-router</code></Hyperlink> is a simple and easy router for SolidJS.
                    It provides easy-to-configure routing for your website/app.</p>

                    <p>However, where it lacks, in my opinion, is dynamic routing - for something like a blog. 
                    Here is where my suffering comes in!</p>
                </div>

                <div class="mb-6">
                    <h2 class="text-2xl mb-2">Dynamic routing - the problem</h2>
                    <p class="mb-2">The issue I have with the dynamic routing in <code>solid-app-router</code> is this: <em>where is the documentation!</em>
                     The example they give is this:</p>

                    <code class="block p-6 mb-6 whitespace-pre bg-light-500 dark:bg-dark-600">
{`{
    path: "/users/:id",
    component: lazy(() => import("/pages/users/[id].js")),
    children: [
        { path: "/", component: lazy(() => import("/pages/users/[id]/index.js")) },
        { path: "/settings", component: lazy(() => import("/pages/users/[id]/settings.js")) },
        { path: "/*all", component: lazy(() => import("/pages/users/[id]/[...all].js")) }
    ]
}`}
                    </code>
                </div>
                <h1 class="text-8xl">TODO: FINISH LOL</h1>
            </div>
        </>
    )
}