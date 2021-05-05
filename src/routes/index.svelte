<script>
  import ProjectCard from "/src/components/projectCard.svelte";
  import PageTitle   from "/src/components/pageTitle.svelte"

  let cardLinks = [
		{
			title: 'ZMD',
			description: 'A custom, open source command line for Windows.',
			img: '/static/assets/zmd.png',
			link: '//github.com/zmd-org/'
		},
		{
			title: 'Discord Themes and Plugins',
			img: '/static/assets/zmd.png',
			link: '//github.com/rem-cord/'
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
  
</body>

<style>
.card-container {
    display: flex;
    flex-wrap: wrap;
}
</style>