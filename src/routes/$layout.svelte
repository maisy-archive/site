<svelte:head>

    <link href="/src/style/main.css" rel="stylesheet" />
	<title>rem's site</title>

    <meta http-equiv="Cache-control" content="no-cache">

    <meta property="og:title" content="rem's site" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://rem-my.github.io" />
    <meta property="og:image" content="https://rem-my.github.io/src/assets/siteLogo.png" />
    <meta property="og:description" content="I'm remmy, but you can call me rem. And this is my site!" />
    <meta name="theme-color" content="#FF7600">

    <meta name="twitter:card" content="summary_large_image">

</svelte:head>

<script>
    import GitHubLogo  from "/src/components/githubLogo.svelte"
    import DiscordLogo from "/src/components/discordLogo.svelte"
    import SiteLogo    from "/src/components/siteLogo.svelte"
    import Banner      from "/src/components/banner.svelte"
</script>

<nav>
    <div id="navbar" class="navbar" >
        <a href=svelte>
            <SiteLogo width="20px" height="20px"/>
        </a>
        <a class="navButton" href="/">Home</a>
        <a class="navButton" href="credits">Site credits</a>
        <div class=buttonContainer>
            <GitHubLogo repo="" />
            <DiscordLogo/>
        </div>
    </div>
</nav>

<Banner content="Hey! This site recently moved to Svelte from HTML. If you find any bugs, please, report them on the GitHub repository." colour="#303030"/>

<main>
    <div class="container">
    <slot/>
    </div>
</main>

<style>
    .navbar {
        background-color: #202020;
        color: #fff;
        padding: 10px;
    }

    .navButton {
        padding: 5px;
        border-radius: 8px;
        background-color: #303030;
        color: #fff;
    }
    .buttonContainer {
    margin-left: 5px;
    float: right;
    }
</style>