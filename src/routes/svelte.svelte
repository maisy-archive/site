<body>
<h1 class=svelteTitle>welcome to svelte land</h1>
<h2>we like svelte here</h2>

<img src="/assets/thecoolerhtml.png" alt="wooo, svelte">
</body>

<style>
* { font-family: Comic Sans MS !important;}
body {
	animation-name: backgroundColorPalette;
	animation-duration: 5s;
	animation-iteration-count: infinite;
	animation-direction: alternate;
	animation-timing-function: linear; 
	/* linear is enabled default, it’s not necessary to add it make it work but it can make your code more expressive */
}

@keyframes backgroundColorPalette {
	0% {
		background: #ee6055;
	}
	25% {
		background: #60d394;
	}
	50% {
		background: #aaf683;
	}
	75% {
		background: #ffd97d;
	}
	100% {
		background: #ff9b85;
	}
}
</style>