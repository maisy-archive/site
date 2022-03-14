import Header from "./Header";
import DateIcon from "@material-design-icons/svg/round/schedule.svg";
import { NavLink } from "solid-app-router";

interface ArticleCardProps {
    children?: string;
    className?: string;
    path: string;
    name: string;
    description: string;
    date: Date;
    tags: string[];
}

export default ({ children, className, path, name, description, date, tags }: ArticleCardProps) => {
    return (
        <NavLink href={path} className={`${className ? className : ""} mt-5 p-5 <lg:mx-auto w-full h-auto transition-all bg-light-tertiary shadow shadow-light-quarternary break-words dark:(bg-dark-secondary shadow-dark-secondary)`}>
                <Header type="h5">{name}</Header>
                <div class="bg-light-quarternary rounded-full container my-1 mx-auto w-max px-2 dark:(bg-dark-quarternary)">{tags.join(", ")}</div>
                <img width="20px" height="20px" class="transition-all inline align-middle w-5 h-5 dark:(filter invert) mr-1" src={DateIcon}/><span class="text-sm">{date.toDateString()}</span>
                <p className="mt-5">{description}</p>
        </NavLink>
    );
};