import Hyperlink from "../components/Hyperlink"
import HomeIcon from "@material-design-icons/svg/round/home.svg";

export default {
    name: "Index",
    description: "Main page of the site",
    icon: HomeIcon,
    path: "/",
    component: () => { return (
        <>
            <div class="mb-6">
                <h1 class="text-4xl mb-2">Beef's website</h1>
                <p>Welcome to my site!</p>
            </div>

            <div class="mb-6">
                <h2 class="text-2xl mb-2">I swear to god Beef you rewrite this website every month</h2>
                <p>Yes, I know, I know... I plan to keep this (5th) variant for longer, as it is written sanely and uses a wonderful combo of <Hyperlink href="//vitejs.dev" target="_blank">Vite</Hyperlink>, <Hyperlink href="//solidjs.com" target="_blank">SolidJS</Hyperlink> and <Hyperlink href="//windicss.org" target="_blank">WindiCSS</Hyperlink>.</p> 
            </div>

            <div class="mb-6">
                <h2 class="text-2xl mb-2">I am very bad at giving index pages content</h2>
                <p>There'll probably be an MOTD or something here soon™</p>
            </div>
        </>
    )}
}