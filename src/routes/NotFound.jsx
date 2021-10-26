export default {
    name: "NotFound",
    description: "404 page.",
    path: "/*all",
    component: () => { return (
        <>
            <div class="pb-6">
                <h1 class="text-4xl">Hey, wait a minute! That's a 404.</h1>
                <p>This is not the route you are looking for.</p>
            </div>
        </>
    )}
}