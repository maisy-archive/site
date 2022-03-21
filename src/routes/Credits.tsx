import { PageRoute } from "../def";
import Header from "../components/Header";
import CreditsIcon from "@material-design-icons/svg/round/engineering.svg";

export default {
    name: "Credits",
    path: "/credits",
    icon: CreditsIcon,
    component: () => {
        return (
            <>
                <div className="container mx-auto mt-10 text-center">
                    <Header type="h1" className="mb-2">Site credits</Header>
                    <p className="text-xl">Beef - Site design and programming</p>
                </div>
            </>
        );
    },
} as PageRoute;