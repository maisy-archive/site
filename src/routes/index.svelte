<script>
  import ProjectCard from "/src/components/projectCard.svelte";
  import PageTitle   from "/src/components/pageTitle.svelte";
  import ListBox	 from "/src/components/listBox.svelte";

  let cardLinks = [
		{
			title: 'ZMD',
			description: 'A custom, open source command line for Windows.',
			img: '/assets/zmd.png',
			link: '/projects/zmd'
		},
		{
			title: 'Discord Themes and Plugins',
			img: '/assets/zmd.png',
			link: '//github.com/rem-cord/'
		},
	];

	let listItems = [
		{
			text: 'A guide on how to install Windows 10 from the command line.',
			link: '/guides/win10/'
		},
	];
</script>

<body>

<!--Main Title-->
<PageTitle>
  <span slot="title">
		Hello!
	</span>
	<span slot="subtitle">
		I'm remmy, but you can call me rem. And this is my site!
	</span>
</PageTitle>

<!--Projects Title-->
  <div id="projectsTitle" class="projectsTitle" >
    <h2>My projects</h2>
  </div>

<!--Projects Section-->

<!--Cards-->
<div class="card-container">
{#each cardLinks as link}
	<ProjectCard showDescription="{link.description}" link="{link.link}" img="{link.img}">
		<span slot="title">{link.title}</span>
		<span slot="description">{link.description}</span>
	</ProjectCard>
{/each}
</div>
  
<!--Other things-->
<div id="listTitle" class="listTitle" >
    <h2>Other things</h2>
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
}
.list-container {
    display: flex;
	flex-direction: column;
	flex-wrap: wrap;
}
</style>