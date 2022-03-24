import { PageRoute } from "../def";
import Header from "../components/Header";
import Pill from "../components/Pill";
import HomeIcon from "@material-design-icons/svg/round/home.svg";
import CodeIcon from "@material-design-icons/svg/round/code.svg";
import AndroidIcon from "@material-design-icons/svg/round/android.svg";
import HardwareIcon from "@material-design-icons/svg/round/developer_board.svg";
import PersonIcon from "@material-design-icons/svg/round/person.svg";
import FlagIcon from "@material-design-icons/svg/round/flag.svg";
import SchoolIcon from "@material-design-icons/svg/round/school.svg";
import TranslateIcon from "@material-design-icons/svg/round/translate.svg";
import Card from "../components/Card";

export default {
    name: "Home",
    path: "/",
    icon: HomeIcon,
    component: () => {
        return (
            <>
                <div className="container mx-auto mt-4 text-center">
                    <div className="mb-2">
                        <Header type="h1" className="<md:mb-4">Hey! I'm Beef.</Header>
                        <Header type="h6">Welcome to my site!</Header>
                    </div>

                    <p className="mb-6">I'm a student from the UK who loves to mess with anything related to technology - be it programming, <span className="line-through">bricking</span> rooting my phones, or hardware-based projects, I'm involved.</p>

                    <div className="mb-2">
                        <Header type="h6" className="mb-2">Here are some things about me:</Header>
                        <div className="flex flex-col">
                            <Pill src={FlagIcon} alt="Flag">I'm British</Pill>
                            <Pill src={PersonIcon} alt="Person">he/him</Pill>
                            <Pill src={SchoolIcon} alt="School">Studying Computer Science</Pill>
                            <Pill src={TranslateIcon} alt="Translate">Fluent in English and learning German</Pill>
                        </div>
                    </div>

                    <div>
                        <Header type="h6" className="mb-2">Here are some of the things I enjoy:</Header>
                        <div className="flex lg:flex-row <lg:flex-col">
                            <Card name="Programming" description="I enjoy programming in TypeScript, JavaScript, but occasionally other languages. You can find all of my projects either on my GitHub or on the Projects page of this site." icon={CodeIcon}/>
                            <Card name="Android" description="Another of my hobbies is rooting Android phones, as well as other shenanigans relating to the OS. Currently, I own a Google Pixel 5, and I've bricked it once. I hope that'll be the only time..." icon={AndroidIcon}/>
                            <Card name="Hardware" description="Hardware mods are also fun! Building my own PCs are what I am mainly versed in. Most recently, I installed a new graphics card in my PC, but I've fixed a few iPhones (very stressfully)." icon={HardwareIcon}/>
                        </div>
                    </div>
                </div>
            </>
        );
    },
} as PageRoute;