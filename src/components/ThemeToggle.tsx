import DarkModeIcon from "@material-design-icons/svg/round/dark_mode.svg";
import LightModeIcon from "@material-design-icons/svg/round/light_mode.svg";
import { toggleTheme } from "../lib";

interface ThemeToggleProps {
    children?: string;
    className?: string;
}

export default ({ children, className }: ThemeToggleProps) => {
    return (
        <div className="transition-all absolute md:mb-2 md:bottom-0 <md:mr-2 <md:right-0 hover:(opacity-70)" onClick={toggleTheme}>
            <img className="block dark:(opacity-0 hidden)" src={DarkModeIcon} />
            <img className="hover:(opacity-70) hidden dark:(opacity-100 block filter invert)" src={LightModeIcon} />
        </div>
    );
};
