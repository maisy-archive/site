import { Route } from "../def";
import Header from "../components/Header";
import HomeIcon from "@material-design-icons/svg/round/home.svg";
import Card from "../components/Card";

export default {
    name: "Home",
    path: "/",
    icon: HomeIcon,
    component: () => {
        return (
            <>
                <div className="container mx-auto mt-10 text-center">
                    <Header type="h1">Hey! I'm Beef.</Header>
                    <p className="text-2xl mb-10">Welcome to my site!</p>

                    <Header type="h6">Here are some of the things I do:</Header>
                    {/* <p>There will be cool card components here soon</p>
                    <p className="text-xs">Trust me it'll be really cool</p>
                    <p className="text-xs opacity-50">I still haven't got around to implementing these</p>
                    <p className="text-xs opacity-25">I promise I'll do it in the next commit</p> */}
                    <div className="flex md:flex-row <md:flex-col">
                        <Card name="Test1" description="Placeholder description" icon={HomeIcon}/>
                        <Card name="Test2" description="Placeholder description" icon={HomeIcon}/>
                        <Card name="Test3" description="Placeholder description (I implemented the cards.)" icon={HomeIcon}/>
                    </div>
                </div>
            </>
        );
    },
} as Route;