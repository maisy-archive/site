<script>
    export let text;
    export let href;
    export let src;
    export let alt;
</script>

<a class="textButton" href={href}>
    {#if src}
        <img src={src} alt={alt} width="20px" height="20px"/> 
    {/if}
    {text}
</a>

<style>
    .textButton {
        background-color: var(--accent);
        padding: 5px;
        padding-left: 8px;
        padding-right: 8px;
        border-radius: 16px;
        text-decoration: none;
        overflow: ellipsis;
        color: var(--foreground);
        transition: 0.3s ease-in-out;
    }

    .textButton:hover {
        color: #141414;
        background-color: var(--pink);
    }

    img {
        vertical-align: top;
        /* margin-bottom: 3px; */
    }
</style>