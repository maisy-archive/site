<svelte:head>

    <link href="/main.css" rel="stylesheet" />
	<title>Beef's Website</title>
    <link rel="icon" href="/favicon.ico" />

    <meta http-equiv="Cache-control" content="no-cache">

    <meta property="og:title" content="Beef's Website" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://beef.vercel.app" />
    <meta property="og:image" content="https://beef.vercel.app/assets/siteLogo.png" />
    <meta property="og:description" content="I'm Beef, and this is my site!" />
    <meta name="theme-color" content="#f74242">

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