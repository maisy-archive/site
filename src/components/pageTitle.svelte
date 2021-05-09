<div id="title" class="title" >
    <div class="left">
		<h1><slot name="title" /></h1>
		<p class="subtitle"><slot name="subtitle" /></p>
	</div>
</div>

<style>
    .title {
        display: flex;
    }
    .title .left {
        float: left;
        flex: 1;
    }
     h1 {
        font-size: 3em;
        margin-top: 15px;
        margin-bottom: 2px;
     }
</style>