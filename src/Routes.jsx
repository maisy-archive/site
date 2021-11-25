// Route imports
import IndexRoute from "./routes/Index";
import AboutRoute from "./routes/About";
import BlogRoute from "./routes/Blog";
import ProjectsRoute from "./routes/Projects";
import CreditsRoute from "./routes/Credits";
import NotFoundRoute from "./routes/NotFound";

// Blog article imports
import SolidRouterRantArticle from "./routes/articles/SolidRouterRant";

// Project imports
import RoFlagProject from "./routes/projects/Flag";

export const routesArray = [
    // Regular routes
    IndexRoute,AboutRoute,BlogRoute,ProjectsRoute,CreditsRoute,NotFoundRoute,

    // Blog article routes
    SolidRouterRantArticle,

    // Project routes
    RoFlagProject,
]