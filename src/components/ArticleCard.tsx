import { JSX } from "solid-js";
import Header from "./Header";
import DateIcon from "@material-design-icons/svg/round/schedule.svg";
import { NavLink } from "solid-app-router";

interface ArticleCardProps {
    children?: JSX.Element[] | JSX.Element;
    className?: string;
    path: string;
    name: string;
    description: string;
    date: Date;
    tags: string[];
}

export default ({ children, className, path, name, description, date, tags }: ArticleCardProps) => {
    return (
        <NavLink href={path} className={`${className ? className : ""} bg-light-tertiary text-dark-primary underline-transparent p-5 <lg:mx-auto w-full h-auto transition-all bg-light-tertiary rounded-lg border-2 border-light-quarternary break-words dark:(bg-dark-secondary text-light-primary border-dark-tertiary) hover:(transform scale-102 !border-accent)`}>
                <Header type="h5">{name}</Header>
                <div class="transition-all bg-light-quarternary rounded-full container my-1 mx-auto w-max px-2 dark:(bg-dark-quarternary)">{tags.join(", ")}</div>
                <img width="20px" height="20px" class="transition-all inline align-middle w-5 h-5 dark:(filter invert) mr-1" src={DateIcon}/><span class="text-sm">{date.toDateString()}</span>
                <p className="mt-5">{description}</p>
        </NavLink>
    );
};
