import { Route } from "../def";
import Header from "../components/Header";

export default {
    name: "Home",
    path: "/",
    component: () => {
        return (
            <>
                <div class="container mx-auto mt-10 text-center">
                    <Header type="h1">Hey! I'm Beef.</Header>
                    <p class="text-2xl mb-10">Welcome to my site!</p>

                    <Header type="h6">Here are some of the things I do:</Header>
                    <p>There will be cool card components here soon</p>
                    <p class="text-xs">Trust me it'll be really cool</p>
                </div>
            </>
        );
    },
} as Route;