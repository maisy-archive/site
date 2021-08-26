<script>
    export let text;
    export let href;
    export let src;
    export let alt;
</script>

<a class="text-button" href={href}>
    {#if src}
        <img src={src} alt={alt} width="20px" height="20px"/> 
    {/if}
    {text}
</a>

<style>
    .text-button {
        background-color: var(--accent);
        padding: 5px;
        padding-left: 8px;
        padding-right: 8px;
        margin-right: 5px;
        border-radius: 16px;
        text-decoration: none;
        overflow: ellipsis;
        color: var(--foreground);
        transition: 0.3s ease-in-out;
    }

    .text-button:hover {
        color: #141414;
        background-color: var(--pink);
    }

    img {
        vertical-align: top;
        /* margin-bottom: 3px; */
    }
</style>