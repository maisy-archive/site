<!-- 
rem's website
Main Page 
-->

<script>
    import SiteLogo from "/src/components/siteLogo.svelte"
    import TextButton from "/src/components/textButton.svelte"
</script>

<body>
    <div class="pageTitle">
        <div onClick="this.remove(); alert('You monster. You killed him.'); window.location = '//www.youtube.com/watch?v=qYS0EeaAUMw'">
            <SiteLogo width="180px" height="180px"/>
        </div>
        <h1>Hello world!</h1> <h2>I'm remmy, but you can call me rem. And this is my site!</h2>

        <div class="buttonContainer">
            <TextButton text="My projects" href="/projects"/>
        </div>
</body>

<style>
    .pageTitle {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
    }

    .pageTitle * {
        margin: 15px;
        animation: fadeIn 0.75s ease-out;
    }

    .pageTitle h1 {
        font-size: 5em;
        /* line-height: 5px; */
        text-overflow: ellipsis;
    }

    .pageTitle h2 {
        font-size: 1.5em;
    }

    @keyframes fadeIn {
        0% {opacity: 0; transform: translateY(-80px)}
        100% {opacity: 1; transform: translateY(0px);}
    }
</style>