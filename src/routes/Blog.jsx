import BlogIcon from "@material-design-icons/svg/round/feed.svg";
import ArticleCard from "../components/ArticleCard";
import { featuredArticles } from "../Routes";

export default {
    name: "Blog",
    description: "Home page for blogs",
    icon: BlogIcon,
    path: "/blog",
    component: () => {
        return (
        <>
            <h1 class="text-4xl mb-2">Blog</h1>
            <h2 class="mb-6">Here are some of my featured articles.</h2>

            <div class="flex-col w-full">
                {featuredArticles.map((article) => function() {
                    return (
                        <ArticleCard name={article.name} description={article.description} tags={article.tags} date={article.date} href={article.path}/>
                    )
                })}
            </div>
        </>
    )}
}