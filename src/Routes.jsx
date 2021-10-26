import { lazy } from "solid-js";

// Route imports
import IndexRoute from "./routes/Index";
import AboutRoute from "./routes/About";
import BlogRoute from "./routes/Blog";
import CreditsRoute from "./routes/Credits";
import NotFoundRoute from "./routes/NotFound";

// TODO: fix default export jank
export const routesArray = [
    {
        path: IndexRoute.path,
        component: IndexRoute.component,
        name: IndexRoute.name,
        icon: IndexRoute.icon,
    },
    {
        path: AboutRoute.path,
        component: AboutRoute.component,
        name: AboutRoute.name,
        icon: AboutRoute.icon,
    },
    {
        path: BlogRoute.path,
        component: BlogRoute.component,
        name: BlogRoute.name,
        icon: BlogRoute.icon,
    },
    {
        path: "/blog/:id",
        component: lazy(() => import("./routes/[article]")),
    },
    {
        path: CreditsRoute.path,
        component: CreditsRoute.component,
        name: CreditsRoute.name,
        icon: CreditsRoute.icon,
    },
    {
        path: NotFoundRoute.path,
        component: NotFoundRoute.component,
        name: NotFoundRoute.name,
    }
]