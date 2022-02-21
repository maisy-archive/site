import { PageRoute } from "../def";
import BlogIcon from "@material-design-icons/svg/round/rss_feed.svg"

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
                <div className="container mx-auto mt-10 text-center">
                    <Header type="h1" className="mb-4">Blog</Header>
                    <p className="text-2xl">Here are the articles I've written.</p>
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