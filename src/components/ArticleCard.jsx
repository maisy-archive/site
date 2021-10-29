import { NavLink } from "solid-app-router";
import ClockIcon from "@material-design-icons/svg/round/schedule.svg";

export default function({ name, description, tags, date, href }) {
    let joinedTags = tags.join(", ");
    return (
        <NavLink href={href} class="bg-light-600 dark:bg-dark-100 mx-auto p-10 mb-3 w-[98%] block shadow-md" >
            <h1 class="text-2xl">{name} <span class="text-sm inline-block pr-2 pl-2 align-middle rounded-full bg-dark-600 text-white dark:bg-light-600 dark:text-black">{joinedTags}</span></h1>
            <h2 class="text-lg mb-2">{description}</h2>
            <img class="inline align-middle mr-2 dark:(filter invert)" src={ClockIcon}/><span class="text-sm align-middle">{date}</span>
        </NavLink>
    )
}