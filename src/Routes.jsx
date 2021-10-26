import { lazy } from "solid-js";

// Route imports
import IndexRoute from "./routes/Index";
import AboutRoute from "./routes/About";
import BlogRoute from "./routes/Blog";
import CreditsRoute from "./routes/Credits";
import NotFoundRoute from "./routes/NotFound";

export const routesArray = [
    IndexRoute,AboutRoute,BlogRoute,CreditsRoute,NotFoundRoute,
    {
        path: "/blog/:id",
        component: lazy(() => import("./routes/[articles]/Index")),
    },
]

export const featuredArticles = [
    {
        name: "My suffering with solid-app-router",
        description: "And why you should use it",
        tags: ["webdev", "rant"],
        date: "26th October 2021",
        path: "/blog/solidrouterrant",
    }
]