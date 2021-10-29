export default {
    type: "page",
    name: "NotFound",
    description: "404 page.",
    path: "/*all",
    component: () => { return (
        <>
            <div class="pb-6">
                <h1 class="text-4xl mb-2">Hey, wait a minute! That's a 404.</h1>
                <p class="mb-2">This is not the route you are looking for.</p>
                <img src="https://c.tenor.com/MA2rJEKr_IEAAAAC/milk-cat-car.gif"/>
            </div>
        </>
    )}
}