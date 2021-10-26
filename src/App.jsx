import { render } from "solid-js/web";
import { Router, useRoutes } from "solid-app-router";
import "virtual:windi.css";
import "virtual:windi-devtools";

// Component imports
import Navbar from "./components/Navbar";
import { routesArray } from "./Routes";


function App() {
    const Routes = useRoutes(routesArray);

    return ( 
        <div class="font-mono h-screen w-screen flex bg-light-400 dark:(bg-dark-400 text-white) transition-colors <md:flex-col">
            <Navbar routes={routesArray}/>
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
