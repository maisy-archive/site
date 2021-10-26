import SmileyIcon from "@material-design-icons/svg/round/emoji_emotions.svg";

export default {
    name: "About",
    description: "Information about me",
    icon: SmileyIcon,
    path: "/about",
    component: () => { return (
        <>
            <div class="mb-6">
                <h1 class="text-4xl">Who am I? Good question!</h1>
                <span>My name is Beef. Here are some things I like:</span>
            </div>

            <div class="mb-6">
                <h1 class="text-2xl">Programming</h1>
                <span>I mainly do backend development using JavaScript (Node.JS) or TypeScript. I used to know how to write decent Windows Batch scripts, but <img class="inline-block align-middle" src="https://cdn.discordapp.com/emojis/477825238172958730.png?size=24"/>.</span>
                <p>I don't actually like web development all that much, but this site's software combo just feels <strong>right</strong>. <span class="text-xs">Windi is so nice to use...</span></p>
            </div>

            <div class="mb-6">
                <h1 class="text-2xl">Video Games</h1>
                <p>I like a lot of games, but especially <strong>Team Fortress 2</strong>, <strong>Scrap Mechanic</strong>, <strong>Minecraft</strong> and <strong>Quaver</strong>.</p>
                <p>As for genres, I'm a big fan of Sandbox-style games, but I also really like Rhythm games.</p>
            </div>
        </>
    )}
}