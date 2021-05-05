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

<body>
    <div id="navbar" class="navbar" >
        <a class="navButton" href="/">Home</a>
        <a class="navButton" href="/src/main/credits/">Site credits</a>
        <a class="imgButton" href="https://github.com/rem-my/" target="_blank" >
            <img class="gh-logo" src="/src/assets/github.png" alt="GitHub" width="20" height="20">
        </a>
        <a class="imgButton" href="https://discord.com/users/257109471589957632" target="_blank" >
            <img class="dc-logo" src="/src/assets/discord.png" alt="Discord" width="20" height="20">
        </a>
    </div>
</body>

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

    .imgButton {
        vertical-align: middle;
        float: right;
        margin-left: 5px;
    }
</style>