import { Route } from "../def";
import { NavLink } from "solid-app-router";

interface NavbarProps {
    children?: string;
    routes: Route[];
}

export default ({ children, routes }: NavbarProps) => {
    return (
        <div class="bg-light-tertiary text-dark-primary flex flex-row px-2 py-2 w-screen h-10 shadow shadow-light-tertiary dark:(bg-dark-secondary text-light-primary shadow-dark-secondary)">
            {routes.map((route) => function() {
                if(route.hidden) return;
                return (
                    <NavLink class="mr-2 text-current" href={route.path} end>
                        {route.name}
                    </NavLink>
                )
            })}
            <button class="float-left" onClick={() => { let root = document.getElementById("root"); if(root?.classList.contains("dark")) { root.classList.remove("dark") } else { root?.classList.add("dark") } }}>switch theme</button>
        </div>
    );
};