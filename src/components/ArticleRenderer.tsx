import Solidown from "solidown";

interface ArticleRendererProps {
    children?: string;
    src: string;
}

export default ({ src }: ArticleRendererProps) => {
    return (
        <Solidown
            children=""
            loading={
                <div class="text-center mt-20">
                    <h1 class="text-3xl">Article content loading... please wait!</h1>
                    <h2 class="text-2xl">This process may be slow depending on your connection.</h2>
                </div>
            }
            css={`
                .solidown-markdown-root h1 {
                    font-family: "Poppins";
                    margin-top: unset;
                    font-size: 2.25rem;
                }
                .solidown-markdown-root h2 {
                    font-family: "Poppins";
                    margin-top: 1rem;
                    font-size: 1.5rem;
                }
                .solidown-markdown-root h3 {
                    font-family: "Poppins";
                    margin-bottom: unset;
                    font-weight: normal;
                    font-size: 1.25rem;
                }
                .solidown-markdown-root p {
                    margin-bottom: 0.5rem;
                }
            `}
            src={src}
        />
    );
}