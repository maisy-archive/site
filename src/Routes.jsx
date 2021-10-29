// Route imports
import IndexRoute from "./routes/Index";
import AboutRoute from "./routes/About";
import BlogRoute from "./routes/Blog";
import CreditsRoute from "./routes/Credits";
import NotFoundRoute from "./routes/NotFound";

// Blog article imports
import SolidRouterRantArticle from "./routes/articles/SolidRouterRant";

export const routesArray = [
    // Regular routes
    IndexRoute,AboutRoute,BlogRoute,CreditsRoute,NotFoundRoute,

    // Blog article routes
    SolidRouterRantArticle,
]