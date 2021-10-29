import Hyperlink from "../../components/Hyperlink";
import Codeblock from "../../components/Codeblock";

const exampleCode1 = `{
    path: "/users/:id",
    component: lazy(() => import("/pages/users/[id].js")),
    children: [
        { path: "/", component: lazy(() => import("/pages/users/[id]/index.js")) },
        { path: "/settings", component: lazy(() => import("/pages/users/[id]/settings.js")) },
        { path: "/*all", component: lazy(() => import("/pages/users/[id]/[...all].js")) }
    ]
}
`

const exampleCode2 = `const params = useParams();

// fetch user based on the id path parameter
const [user] = createResource(() => params.id, fetchUser);
`

export default {
    type: "article",
    name: "My suffering with solid-app-router",
    description: "And why I think you should use it!",
    tags: ["webdev", "rant"],
    date: "26th October 2021",
    path: "/blog/solidrouterrant",
    component: () => { return (
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
                    <p>The issue I have with the dynamic routing in <code>solid-app-router</code> is this: 
                    <em class="text-xl">where is the documentation!</em></p>

                    <p>The example they give is as follows:</p>
                    <Codeblock>{exampleCode1}</Codeblock>

                    <p>This does not tell you anything about how to use it!</p>
                    <p>You may be saying - oh, but you're supposed to use <code>getParams()</code>, which is documented!!</p>
                    <p>Yeah, good documentation...</p>

                    <Codeblock>{exampleCode2}</Codeblock>
                    <p>Once again, the user is not told how to utilise the parameters, as we are not shown what the <code>fetchUser</code> function does!</p>
                </div>

                <div class="mb-6">
                    <h2 class="text-2xl mb-2">Why you should use <code>solid-app-router</code></h2>
                    <p>Despite the flaws with dynamic routing, <code>solid-app-router</code> is great to use.</p>
                    <p>It's also easy to integrate into a navbar, like what I did.</p>
                </div>
            </div>
        </>
    )}
}