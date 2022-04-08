import { defineConfig } from "windicss/helpers";

export default defineConfig({
    darkMode: "class",
    theme: {
        extend: {
            transitionProperty: {
                "filter": "filter"
            },
        },
        fontFamily: {
            default: ["Source Sans Pro"],
            header: ["Poppins"],
            mono: ["JetBrains Mono"]
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            "dark-primary": "#212529", // Eerie Black
            "dark-secondary": "#343A40", // Onyx
            "dark-tertiary": "#495057", // Davys Grey
            "dark-quarternary": "#6C757D", // Sonic Silver
            "muted": "#ADB5BD", // Cadet Blue Crayola
            "light-primary": "#F8F9FA", // Cultured
            "light-secondary": "#E9ECEF", // Cultured
            "light-tertiary": "#DEE2E6", // Gainsboro
            "light-quarternary": "#CED4DA", // Light Grey
            "accent": "#09bc8a" // Mountain Meadow
        }
    },
})