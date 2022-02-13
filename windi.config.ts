import { defineConfig } from "windicss/helpers";

export default defineConfig({
    darkMode: "class",
    theme: {
        fontFamily: {
            default: ["Source Sans Pro"],
            header: ["Poppins"],
            mono: ["JetBrains Mono"]
        },
        shortcuts: {
            "header": "font-header text-8xl"
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            "dark-primary": "#111D13", // Dark Jungle Green
            "dark-secondary": "#415D43", // Hunter Green
            "dark-tertiary": "#709775", // Russian Green
            "light-primary": "#AFD4B3", // Turquoise Green
            "light-secondary": "#A1CCA5", // Eton Blue
            "light-tertiary": "#8FB996" // Dark Sea Green
        }
    },
})