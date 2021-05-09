<script>
    export let content;
    export let colour;

</script>

<div class="banner" style="background: {colour}">
    <div class="left">
        <div class="subtitle">{content}</div>
    </div>
    <div class="right">
        <div onClick='this.parentElement.parentElement.style.display = "none"' class="closeButton">x</div>
    </div>
</div>


<style>
.banner {
    padding: 5px;
    display: flex;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}
.banner .left {
    float: left;
    flex: 1;
}
.banner .right {
    float: right;
    margin-left: 4rem;
}
.subtitle {
     font-size: 16px;
     margin-top: .25rem;
}
.closeButton {
    vertical-align: middle;
    padding: 2px;
    padding-right: 5px;
    padding-left: 5px;
    border-radius: 8px;
    background-color: #404040;
    color: #fff;
    cursor: pointer;
    transition: color ease .2s;
}
.closeButton:hover {
    color: rgb(204, 204, 204);
}
</style>