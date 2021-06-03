<svelte:head>

    <link href="/main.css" rel="stylesheet" />
	<title>rem's site</title>
    <link rel="icon" href="/favicon.ico" />

    <meta property="og:title" content="rem's Webite" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://rem.catmaid.live" />
    <meta property="og:image" content="https://rem.catmaid.live/assets/siteLogo.png" />
    <meta property="og:description" content="I'm remmy, but you can call me rem. And this is my site!" />
    <meta name="theme-color" content="#FF7600">

</svelte:head>

<script>
    import SiteLogo from "/src/components/siteLogo.svelte"
    import TextButton from "/src/components/textButton.svelte"
</script>

<nav>
    <div class='navbar'>
        <div class="buttonContainer">
            <TextButton src="/assets/siteLogo.png" text="Home" href="/"/>
            <TextButton text="My projects" href="/projects"/>
        </div>
    </div>
</nav>

<main>
    <div class="container">
    <slot/>
    </div>
</main>

<style>
    .navbar {
        background-color: var(--background-alt);
        color: #fff;
        padding: 10px;
        border-radius: 32px;
        z-index: 999;
    }
</style>