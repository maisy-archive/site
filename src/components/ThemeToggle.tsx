import { JSX } from "solid-js";

import DarkModeIcon from "@material-design-icons/svg/round/dark_mode.svg";
import LightModeIcon from "@material-design-icons/svg/round/light_mode.svg";
import { toggleTheme } from "../lib";

interface ThemeToggleProps {
    children?: JSX.Element[] | JSX.Element;
    className?: string;
}

export default ({ children, className }: ThemeToggleProps) => {
    return (
        <div className="transition-all md:mt-auto <md:ml-auto hover:(opacity-70)" onClick={toggleTheme}>
            <img className="block h-full w-full dark:(opacity-0 hidden)" src={DarkModeIcon} />
            <img className="hover:(opacity-70) h-full w-full hidden dark:(opacity-100 block filter invert)" src={LightModeIcon} />
        </div>
    );
};
