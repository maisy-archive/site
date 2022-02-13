import { Route } from "../def";
import Header from "../components/Header";
import Code from "../components/Code";

export default {
    name: "404",
    path: "/*all",
    hidden: true,
    component: () => {
        return (
            <div>
                <Header type="h1">Oops!</Header>
                <p class="mt-2">Looks like that route is invalid.</p>
            </div>
        );
    },
} as Route;