<script>
	export let link;
    export let img;
    export let name;
    export let description;
    export let showDescription = false;
</script>

<div class="container">
    <a href="{link}" target="_blank">
        <div class="item" style='background: url("{img}")'>
            <div class="cardTitle">
                <slot name="title"></slot>
            </div>
            <div class="spacer"></div>
            {#if showDescription}
            <div class="description">
                <slot name="description"></slot>
            </div>
            {/if}
        </div>
    </a>
</div>