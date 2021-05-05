<script>
    import SiteLogo from "/src/components/siteLogo.svelte"
</script>

<div id="title" class="title" >
    <div class="logo">
		<SiteLogo />
	</div>
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
    .title .logo {
        float: left;
        align-self: left;
        margin-right: 15px;
    }
     /* Specific to this page :) */
     h1 {
         font-size: 3em;
         margin-top: 15px;
     }
</style>