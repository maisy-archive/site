<script>
    export let title;
    export let description;
    export let href;
</script>

<div class="projectCard">
    <div class="projectTitle">
        <p>{title}</p>
    </div>
    <div class="projectDescription">
        <p>{description}</p> <a href={href}>Link</a>
    </div>
</div>

<style>
    .projectCard {
        background: var(--background-alt);
        padding: 8px;
        width: 16em;
        height: 7em;
        margin-right: 10px;
        margin-bottom: 10px;
        text-overflow: ellipsis;
        font-size: large;
        border-radius: 16px;
    }

    .projectDescription {
        font-size: smaller;
    }
</style>