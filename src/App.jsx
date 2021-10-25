import { render } from "solid-js/web";
import { Router, useRoutes } from "solid-app-router";
import "virtual:windi.css";
import "virtual:windi-devtools";

// Component imports
import Navbar from "./components/Navbar";

// Icons
import HouseIcon from "@material-design-icons/svg/round/house.svg";
import SmileyIcon from "@material-design-icons/svg/round/emoji_emotions.svg";
import EngineeringIcon from "@material-design-icons/svg/round/engineering.svg";

// Routes
import IndexRoute from "./routes/Index";
import AboutRoute from "./routes/About";
import CreditsRoute from "./routes/Credits";
import NotFoundRoute from "./routes/NotFound"

const routes = [
    {
        path: "/",
        component: IndexRoute,
        name: "",
        icon: HouseIcon,
    },
    {
        path: "/about",
        component: AboutRoute,
        name: "",
        icon: SmileyIcon,
    },
    {
        path: "/credits",
        component: CreditsRoute,
        name: "",
        icon: EngineeringIcon,
    },
    {
        path: "/*all",
        component: NotFoundRoute,
    }
]

function App() {
    const Routes = useRoutes(routes);

    return ( 
        <div class="font-mono h-screen w-screen flex bg-light-400 dark:(bg-dark-400 text-white) transition-colors <md:flex-col">
            <Navbar routes={routes}/>
            <div class="px-4 py-4">
                <Routes />
            </div>
        </div>
    );
}

render(
    () => (
        <Router>
            <App />
        </Router>
    ),
    document.getElementById("root")
);
