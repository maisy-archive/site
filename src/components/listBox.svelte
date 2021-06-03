<script>
    export let text;
    export let link;
</script>

<div class="listBox">
    <a href={link}>{text}</a>
</div>

<style>
    .listBox {
        background: var(--background-alt);
        padding: 5px;
        padding-left: 8px;
        padding-right: 8px;
        border-radius: 16px;
        margin-bottom: 4px;
    }
    a {
        color: var(--foreground);
        transition: color ease .2s;
        text-decoration: none;
    }
    a:hover {
        color: var(--foreground-alt);
    }
</style>