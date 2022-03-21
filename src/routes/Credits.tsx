import { PageRoute } from "../def";
import Header from "../components/Header";
import CreditsIcon from "@material-design-icons/svg/round/engineering.svg";
import CreditsUser from "../components/CreditsUser";

const beefAvatar: string = (await (await fetch("https://api.github.com/users/Beefers")).json()).avatar_url;
const sinkAvatar: string = (await (await fetch("https://api.github.com/users/Yellowsink")).json()).avatar_url;

export default {
    name: "Credits",
    path: "/credits",
    icon: CreditsIcon,
    component: () => {
        return (
            <>
                <div className="container mx-auto mt-10 text-center">
                    <Header type="h1" className="mb-2">Site credits</Header>
                    <p className="text-xl mb-2"><CreditsUser username="Beefers" src={beefAvatar}/> - Site design and programming</p>
                    <p className="text-xl mb-2"><CreditsUser username="Yellowsink" src={sinkAvatar}/> - Inspiration and indirect assistance</p>
                </div>
            </>
        );
    },
} as PageRoute;