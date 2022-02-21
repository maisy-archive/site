/* @refresh reload */
import { render } from "solid-js/web";
import { Router, useRoutes } from "solid-app-router";
import "virtual:windi.css";
import "virtual:windi-devtools";

import Navbar from "./components/Navbar";
import routesArray from "./routes";
import articlesArray from "./routes/articles";

function App() {
    // @ts-ignore
    // I have to ignore this because tsc fails here and Vite doesn't.
    // I don't know why.
    // TODO: Find out why
    const Routes = useRoutes(routesArray.concat(articlesArray));

    return (
        <div className="bg-light-primary text-dark-primary font-default font-medium flex md:(flex-row) <md:(flex-col) w-screen h-screen transition-all dark:(bg-dark-primary text-light-primary)">
            <Navbar routes={routesArray}/>
            <div className="px-4 py-4 w-full overflow-y-auto">
                <Routes/>
            </div>
        </div>
    );
};

render(() => <Router><App/></Router>, document.getElementById("root") as HTMLElement);
