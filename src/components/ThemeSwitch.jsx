import light from "@material-design-icons/svg/round/light_mode.svg";
import dark from "@material-design-icons/svg/round/dark_mode.svg";

export default function () {
    return (
        <div class="absolute md:flex-col md:mb-2 md:bottom-0 <md:mx-2 <md:flex <md:right-0">
            <img src={light} class="transition-all dark:(filter invert)" />
        
            <button
                class="transition-all md:w-6 md:h-12 <md:w-12 <md:h-6 rounded-full bg-dark-800 dark:bg-dark-100 md:my-1 <md:mx-1 items-center"
                onClick={() => {
                    let root = document.getElementById("root");
                    document.cookie = root.classList == "" ? "dark" : "light"
                    root.classList = root.classList == "" ? "dark" : "";
                }}
            >
            <div class="transition-all w-4 h-4 rounded-full bg-light-500 md:-my-5 mx-1 md:dark:mt-1 <md:dark:ml-7" />
            </button>
        
            <img src={dark} class="transition-all dark:(filter invert)" />
        </div>
    )
}