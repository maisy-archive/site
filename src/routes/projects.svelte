<!-- 
Beef's Website
Projects Page 
-->

<script>
    import ProjectCard from "/src/components/projectCard.svelte";
    import ListBox from "/src/components/listBox.svelte";

    let cardLinks = [
		{
			title: 'ZMD',
			description: 'A custom, open source command line for Windows.',
			link: '/projects/zmd/'
		},
        {
			title: 'Labscord',
			description: 'A group of Discord users researching and documenting new Discord features.',
			link: '//github.com/labscord/'
		},
        {
			title: 'dcjs',
			description: 'A discord cli client written in JS. Warning, very WIP.',
			link: '//github.com/Beefers/dcjs/'
		},
		{
			title: 'Discord Themes and Plugins',
            description: 'My plugins and themes I\'ve created/developed for use with client mods.',
			link: '//github.com/beef-cord/'
		},
	];

    let listItems = [
		{
			text: 'A guide on how to install Windows 10 manually. Should also work with Windows 11!',
			link: '/guides/win10/'
		},
	];

</script>

<body>
    <div class="card-container">
        {#each cardLinks as link}
            <ProjectCard title={link.title} description={link.description} href={link.link}/>
        {/each}
    </div>

    <div class="list-container">
        {#each listItems as link}
            <ListBox text="{link.text}" link="{link.link}"/>
        {/each}
    </div>
</body>

<style>
    .card-container {
        display: flex;
        flex-wrap: wrap;
        animation: fadeIn 0.75s ease-out;
    }
    .list-container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        animation: fadeIn 0.75s ease-out;
    }

    @keyframes fadeInLeft {
        0% {opacity: 0; transform: translateX(-180px)}
        100% {opacity: 1; transform: translateX(0px);}
    }

    @keyframes fadeInRight {
        0% {opacity: 0; transform: translateX(180px)}
        100% {opacity: 1; transform: translateX(0px);}
    }

    @keyframes fadeIn {
        0% {opacity: 0; transform: translateY(80px)}
        100% {opacity: 1; transform: translateY(0px);}
    }
</style>