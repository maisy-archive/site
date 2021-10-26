import BlogIcon from "@material-design-icons/svg/round/feed.svg";
import { NavLink } from "solid-app-router";

export default {
    name: "Blog",
    description: "Home page for blogs",
    icon: BlogIcon,
    path: "/blog",
    component: () => { 
        return (
        <>
            <h1 class="text-4xl mb-6">Blog</h1>
            <p>This blog implementation is work-in-progress. Please, remind me to fix the implementation when it's not 1AM.</p>
            <p>The only working article right now is this
                <NavLink class="inline-block align-middle ml-2" href="/blog/test" end>
                        <img src="https://cdn.discordapp.com/emojis/477825238172958730.png?size=24" />
                </NavLink>
            . Click on the ZereButton™ to see it.</p>
        </>
    )}
}