import ArticleRenderer from "../../components/ArticleRenderer";
import { ArticleRoute } from "../../def";

export default {
    name: "Why rewrite your site 5 times?",
    path: "/articles/WhyRewriteYourSite",
    description: "I don't really know if I can justify this but I'm going to try",
    date: new Date("3/14/22"),
    tags: ["webdev"],
    component: () => {
        return (
            <div>
                <ArticleRenderer src="/articles/WhyRewriteYourSite.md"/>
            </div>
        )
    }
} as ArticleRoute;