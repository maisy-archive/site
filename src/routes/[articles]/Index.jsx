import { useParams, useNavigate } from 'solid-app-router';
import { lazy } from "solid-js";

// TODO: jank

export default function() {
    const params = useParams();
    const navigate = useNavigate();
    const Article = lazy(() => import(/*@vite-ignore*/`./${params.id}`).catch(function () {
        return navigate('/invalid-blog');
    }));

    return (
        <Article/>
    );
}