<script>
    export let text;
    export let link;
</script>

<div class="listBox">
    <a href={link}>{text}</a>
</div>

<style>
    .listBox {
        background: #202020;
        padding: 5px;
        border-radius: 8px;
        margin-bottom: 4px;
    }

a {
  color: unset;
  transition: color ease .2s;
}

a:hover {
  color: rgb(204, 204, 204);
}
</style>