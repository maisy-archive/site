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
        <div className={`m-5 p-5 <lg:mx-auto w-full h-auto transition-all bg-light-quarternary shadow shadow-light-quarternary dark:(bg-dark-secondary shadow-dark-secondary) ${className}`}>
            <img className="mx-auto h-25 transition-all dark:(filter invert)" src={icon}/>
            <Header type="h5">{name}</Header>
            <p className="mt-5">{description}</p>
        </div>
    );
};