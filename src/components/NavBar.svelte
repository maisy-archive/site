<script>
    import TextButton from '../components/TextButton.svelte'
</script>

<nav>
    <div class='navbar'>
        <div class="button-container">
            <TextButton src="/assets/siteLogo.png" text="Home" href="/"/>
            <TextButton text="My projects" href="/projects"/>
        </div>
    </div>
</nav>

<style>
    .navbar {
        background-color: var(--background-alt);
        color: #fff;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 5px;
        padding-right: 5px;
        border-radius: 32px;
        z-index: 999;
    }
</style>