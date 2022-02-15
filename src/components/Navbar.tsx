import { Route } from "../def";
import NavbarItem from "./NavbarItem";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
    children?: string;
    routes: Route[];
}

export default ({ children, routes }: NavbarProps) => {
    return (
        <div className="bg-light-tertiary text-dark-primary flex flex-col px-2 py-2 h-screen w-10 <md:w-screen <md:h-10 <md:flex-row shadow shadow-light-tertiary transition-all dark:(bg-dark-secondary text-light-primary shadow-dark-secondary)">
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