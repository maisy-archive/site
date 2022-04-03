import { JSX } from "solid-js";

import { NavLink } from "solid-app-router";

interface NavbarItemProps {
    children?: JSX.Element[] | JSX.Element;
    className?: string;
    href: string;
    src: string;
    alt?: string;
}

export default ({ children, className, href, src, alt }: NavbarItemProps) => {
    return (
        <NavLink className="mr-2" href={href} end>
            <img className="transition-all h-full w-full hover:(opacity-70) dark:(filter invert)" src={src} alt={alt}/>
        </NavLink>
    );
};
