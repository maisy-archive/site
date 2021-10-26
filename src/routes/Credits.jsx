import EngineeringIcon from "@material-design-icons/svg/round/engineering.svg";
import Hyperlink from "../components/Hyperlink";

export default {
    name: "Credits",
    description: "People that helped with this site",
    icon: EngineeringIcon,
    path: "/credits",
    component: () => { return (
        <>
            <h1 class="text-4xl mb-6">Site credits</h1>
            <div class="mb-6">
                <h2 class="text-2xl"><Hyperlink href="//github.com/yellowsink" target="_blank">Yellowsink</Hyperlink></h2>
                <p>- Theme switcher implementation</p>
            </div>
        </>
    )}
}