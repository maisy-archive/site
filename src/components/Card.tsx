import Header from "./Header";

interface CardProps {
    children?: string;
    className?: string;
    name: string;
    description: string;
    icon: string;
}

export default ({ children, className, name, description, icon }: CardProps) => {
    return (
        <div className={`m-5 p-5 <md:mx-auto w-full h-150 transition-all bg-light-quarternary shadow shadow-light-quarternary dark:(bg-dark-secondary shadow-dark-secondary) ${className}`}>
            <img className="mx-auto h-25 dark:(filter invert)" src={icon}/>
            <Header type="h4">{name}</Header>
            <p className="mt-5">{description}</p>
        </div>
    );
};