import { Route } from "../def";

interface NavbarProps {
    children?: string;
    routes: Route[];
}

export default ({ children, routes }: NavbarProps) => {
    return (
        <div class="bg-light-tertiary text-dark-primary flex flex-row px-2 py-2 w-screen h-10 dark:(bg-dark-secondary text-light-primary)">
            <p>Hello</p>
        </div>
    );
};