/* @refresh reload */
import { render } from "solid-js/web";
import { Router, useRoutes } from "solid-app-router";
import "virtual:windi.css";
import "virtual:windi-devtools";

import Navbar from "./components/Navbar";
import routesArray from "./routes";
import articlesArray from "./routes/articles";
import { getSetting, setTheme, setupSettingsStore } from "./lib";

function App() {
    const Routes = useRoutes(routesArray.concat(articlesArray));

    setupSettingsStore();
    setTheme();

    return (
        <div className={`w-screen h-screen font-default font-medium flex md:(flex-row) ${getSetting("ergonomicMode") ? "<md:flex-col-reverse" : "<md:flex-col"} transition-colors bg-light-primary text-dark-primary dark:(bg-dark-primary text-light-primary)`}>
            <Navbar routes={routesArray}/>
            <div className="px-4 py-4 w-full h-full overflow-y-auto">
                <Routes/>
            </div>
        </div>
    );
};

render(() => <Router><App/></Router>, document.getElementById("root") as HTMLElement);
