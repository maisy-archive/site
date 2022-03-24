import { PageRoute } from "../def";
import BlogIcon from "@material-design-icons/svg/round/table_rows.svg"

import Header from "../components/Header";
import ArticleCard from "../components/ArticleCard";
import articlesArray from "./articles";

export default {
    name: "Blog",
    path: "/articles/",
    icon: BlogIcon,
    component: () => {
        return (
            <>
                <div className="container mx-auto mt-4 text-center">
                    <div className="mb-2">
                        <Header type="h1" className="mb-4">Blog</Header>
                        <Header type="h6">Here are the articles I've written.</Header>
                    </div>
                    <div class="container flex flex-col">
                        {articlesArray.map((article) => function() {
                            return (
                                <ArticleCard path={article.path} name={article.name} description={article.description} date={article.date} tags={article.tags}/>
                            )
                        })}
                    </div>
                </div>
            </>
        );
    },
} as PageRoute;