import { useParams } from 'solid-app-router';
import { lazy } from "solid-js";

export default function() {
    const params = useParams();
    const Article = lazy(() => import(`../articles/${params.id}`));

    return (
        <Article/>
    )
}