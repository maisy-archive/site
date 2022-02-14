import { Route } from "../def";
import { NavLink } from "solid-app-router";
import Header from "./Header";

interface NavbarProps {
    children?: string;
    className?: string;
    routes: Route[];
}

export default ({ children, className, routes }: NavbarProps) => {
    return (
        <div className={`bg-light-tertiary text-dark-primary flex flex-col p-10 w-100 h-screen text-center shadow shadow-light-tertiary transition-all dark:(bg-dark-secondary text-light-primary shadow-dark-secondary) ${className}`}>
            <Header type="h4">Beef's site</Header>
            <div className="h-[1px] px-5 my-5 bg-muted"/>
            {routes.map((route) => function() {
                if(!route.icon) return;
                return (
                    <NavLink className="text-current flex flex-row mx-auto underline-transparent transition-opacity hover:(opacity-75)" href={route.path} end>
                        <img className="h-10 transition-all dark:(filter invert)" src={route.icon}/>
                        <span className="text-4xl">{route.name}</span>
                    </NavLink>
                )
            })}
            <button onClick={() => { let root = document.getElementById("root"); if(root?.classList.contains("dark")) { root.classList.remove("dark") } else { root?.classList.add("dark") } }}>switch theme</button>
        </div>
    );
};