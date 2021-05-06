<script>
	  export let link;
    export let img;
    export let name;
    export let description;
    export let showDescription = false;
</script>

<div class="container">
    <a href="{link}">
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

<style>
.container {
  display: flex;
  flex-wrap: wrap;
}

.item {
  margin: .5rem;

  border: solid #303030 1px;
  border-radius: .25rem;
  padding: 0;
  width: 20rem;
  height: 12rem;
  background-size: cover !important;
  background-position: center !important;
  display: flex;
  flex-flow: column nowrap;

  --overlay-bg: rgba(14, 14, 14, 0.9);
}

.cardTitle {
  background: var(--overlay-bg);
  box-shadow: var(--overlay-bg) 0 11px 12px;
  font-weight: lighter;
  font-size: 1.3em;
  padding: .2rem 0 0 .2rem;
}

.description {
  background: var(--overlay-bg);
  box-shadow: var(--overlay-bg) 0 -11px 12px;
  padding: 0 0 .2rem .2rem;
}

.spacer {
  flex: 1;
}

a {
  color: unset;
}
</style>