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
        color: var(--foreground);
        padding: 5px;
        border-radius: 32px;
        z-index: 999;
    }

    .button-container {
        display: flex;
    }
</style>