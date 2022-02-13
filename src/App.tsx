/* @refresh reload */
import { render } from "solid-js/web";
import { Router, useRoutes } from "solid-app-router";
import "virtual:windi.css";
import "virtual:windi-devtools";

import type { Component } from "solid-js";
import Navbar from "./components/Navbar";

import routesArray from "./routes";

function App() {
    // @ts-ignore
    // I have to ignore this because tsc fails here and Vite doesn't.
    // I don't know why.
    // TODO: Find out why
    const Routes = useRoutes(routesArray);

    return (
        <div class="bg-light-primary text-dark-primary font-default font-medium flex flex-col w-screen h-screen dark:(bg-dark-primary text-light-primary)">
            <Navbar routes={routesArray}/>
            <div class="px-4 py-4 w-full">
                <Routes/>
            </div>
        </div>
    );
};

render(() => <Router><App/></Router>, document.getElementById("root") as HTMLElement);
