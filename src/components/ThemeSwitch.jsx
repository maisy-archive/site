import light from "@material-design-icons/svg/round/light_mode.svg";
import dark from "@material-design-icons/svg/round/dark_mode.svg";

export default function () {
    return (
        <div class="mb-2 absolute bottom-0">
            <img src={light} class="dark:(filter invert) transition-all" />
        
            <button
            class="w-6 h-12 rounded-full bg-dark-800 dark:bg-dark-100 my-2 items-center"
            onClick={() => {
                let root = document.getElementById("root");
                document.cookie = root.classList == "" ? "dark" : "light"
                root.classList = root.classList == "" ? "dark" : "";
            }}
            >
            <div class="w-4 h-4 rounded-full bg-light-500 -my-my-5 mx-1 dark:mt-1 transition-all" />
            </button>
        
            <img src={dark} class="dark:(filter invert) transition-all" />
      </div>
    )
}