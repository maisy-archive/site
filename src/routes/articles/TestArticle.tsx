import ArticleRenderer from "../../components/ArticleRenderer";
import { ArticleRoute } from "../../def";

export default {
    name: "TestArticle",
    path: "/articles/TestArticle",
    description: "This is a test article.",
    date: new Date("2/1/22"),
    tags: ["test", "article"],
    component: () => {
        return (
            <div>
                <ArticleRenderer src="/articles/TestArticle.md"/>
            </div>
        )
    }
} as ArticleRoute;