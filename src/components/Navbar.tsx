import { JSX } from "solid-js";

import { PageRoute } from "../def";
import NavbarItem from "./NavbarItem";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
    children?: JSX.Element[] | JSX.Element;
    routes: PageRoute[];
}

// TODO: Could use a rewrite to make responsive design better

export default ({ children, routes }: NavbarProps) => {
    return (
        <div className=" bg-light-tertiary text-dark-primary z-50 fixed left-0 right-0 mt-2 mx-auto flex flex-row px-2 py-2 w-max h-15 rounded-lg shadow-sm shadow-light-quarternary transition-all dark:(bg-dark-secondary text-light-primary shadow-dark-tertiary)">
            {routes.map((route) => function() {
                if(!route.icon) return;
                return (
                    <NavbarItem href={route.path} src={route.icon} alt={route.name}/>
                )
            })}
            <ThemeToggle/>

            <style>{".active { opacity: 0.6; }"}</style>
        </div>
    );
};