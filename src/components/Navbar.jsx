import { NavLink } from "solid-app-router";
import ThemeSwitch from "./ThemeSwitch";

export default function({ routes }) {
    return (
        <div class="flex flex-col px-2 py-2 shadow-md h-screen w-10 bg-light-900 dark:bg-dark-900 transition-colors <md:h-10 <md:w-screen <md:flex-row">
            {routes.map((route) => (
                <NavLink class="w-6 h-6 md:mb-2 <md:mr-2" href={route.path} end>
                    <img src={route.icon} alt={route.name} class="dark:(filter invert) opacity-100"/>
                </NavLink>
            ))}
            <ThemeSwitch/>

            {/* :juan: */}
            <style>{".active { opacity: 0.6; }"}</style>
        </div>
    )
}