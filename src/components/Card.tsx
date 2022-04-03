import { JSX } from "solid-js";
import Header from "./Header";

interface CardProps {
    children?: JSX.Element[] | JSX.Element;
    className?: string;
    name: string;
    description: string;
    icon: string;
}

export default ({ children, className, name, description, icon }: CardProps) => {
    return (
        <div className={`${className ? className : ""} lg:mr-2 <lg:mb-2 p-5 <lg:mx-auto w-full h-auto transition-all bg-light-tertiary rounded-lg shadow-sm shadow-light-quarternary break-words dark:(bg-dark-secondary shadow-dark-tertiary)`}>
            <img width="100px" height="100px" className="mx-auto h-25 w-25 transition-all dark:(filter invert)" src={icon}/>
            <Header type="h5">{name}</Header>
            <p className="mt-5">{description}</p>
        </div>
    );
};