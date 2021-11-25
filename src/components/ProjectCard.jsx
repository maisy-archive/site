import { NavLink } from "solid-app-router";

export default function({ name, description, href }) {
    return (
        <NavLink href={href} class="transition-colors bg-light-600 dark:(bg-dark-100 text-white) mx-auto p-10 mb-3 w-[98%] block shadow-md" >
            <h1 class="text-2xl">{name}</h1>
            <h2 class="text-lg mb-2">{description}</h2>
        </NavLink>
    )
}