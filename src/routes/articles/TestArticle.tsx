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
                <ArticleRenderer src={`/articles/${document.location.pathname.slice(10)}.md`}/>
            </div>
        )
    }
} as ArticleRoute;