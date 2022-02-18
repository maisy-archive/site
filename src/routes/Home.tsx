import { Route } from "../def";
import Header from "../components/Header";
import HomeIcon from "@material-design-icons/svg/round/home.svg";
import CodeIcon from "@material-design-icons/svg/round/code.svg";
import AndroidIcon from "@material-design-icons/svg/round/android.svg";
import HardwareIcon from "@material-design-icons/svg/round/developer_board.svg";
import Card from "../components/Card";

export default {
    name: "Home",
    path: "/",
    icon: HomeIcon,
    component: () => {
        return (
            <>
                <div className="container mx-auto mt-10 text-center">
                    <div className="mb-2">
                        <Header type="h1">Hey! I'm Beef.</Header>
                        <p className="text-2xl mb-2">Welcome to my site!</p>
                    </div>

                    <p className="mb-5">I'm a student from the UK who loves to mess with anything related to technology - be it programming, <span className="line-through">bricking</span> rooting my phones, or hardware-based projects, I'm involved.</p>

                    <Header type="h6">Here are some of the things I enjoy:</Header>
                    {/* <p>There will be cool card components here soon</p>
                    <p className="text-xs">Trust me it'll be really cool</p>
                    <p className="text-xs opacity-50">I still haven't got around to implementing these</p>
                    <p className="text-xs opacity-25">I promise I'll do it in the next commit</p> */}
                    <div className="flex lg:flex-row <lg:flex-col mt-4">
                        <Card name="Programming" description="I enjoy programming in TypeScript, JavaScript, but occasionally other languages. You can find all of my projects either on my GitHub or on the Projects page of this site." icon={CodeIcon}/>
                        <Card name="Android" description="Another of my hobbies is rooting Android phones, as well as other shenanigans relating to the OS. Currently, I own a Google Pixel 5, and I've bricked it once. I hope that'll be the only time..." icon={AndroidIcon}/>
                        <Card name="Hardware" description="Hardware mods are also fun! Building my own PCs are what I am mainly versed in. Most recently, I installed a new graphics card in my PC, but I've fixed a few iPhones (very stressfully)." icon={HardwareIcon}/>
                    </div>
                </div>
            </>
        );
    },
} as Route;