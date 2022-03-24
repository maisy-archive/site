import { PageRoute } from "../def";
import Header from "../components/Header";
import CreditsIcon from "@material-design-icons/svg/round/engineering.svg";
import CreditsUser from "../components/CreditsUser";

export default {
    name: "Credits",
    path: "/credits",
    icon: CreditsIcon,
    component: () => {
        return (
            <>
                <div className="container mx-auto mt-10 text-center">
                    <Header type="h1" className="mb-2">Site credits</Header>
                    <p className="text-xl mb-2"><CreditsUser username="Beefers"/> - Site design and programming</p>
                    <p className="text-xl mb-2"><CreditsUser username="Yellowsink"/> - Inspiration and indirect assistance</p>
                </div>
            </>
        );
    },
} as PageRoute;