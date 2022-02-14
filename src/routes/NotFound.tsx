import { Route } from "../def";
import Header from "../components/Header";

export default {
    name: "404",
    path: "/*all",
    component: () => {
        return (
            <>
                <div className="container mx-auto mt-10 text-center">
                    <Header type="h1" className="mb-2">Oops!</Header>
                    <p className="text-2xl">That route is invalid.</p>
                </div>
            </>
        );
    },
} as Route;