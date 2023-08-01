import { defineConfig, transformerVariantGroup, presetUno, presetWebFonts } from "unocss";
import { presetScrollbar } from "unocss-preset-scrollbar";
import { readFileSync } from "node:fs";
import { join } from "node:path";

import * as catpuccin from "./catppuccin.json";

export default defineConfig({
    presets: [
        presetUno(),
        presetScrollbar(),
        presetWebFonts({
            provider: "google",
            fonts: {
                sans: "Inter",
                mono: "JetBrains Mono"
            }
        }),
    ],
    transformers: [
        transformerVariantGroup(),
    ],
    preflights: [
        {
            getCSS: ({ theme }: Record<string, any>) => {
                const preflightRaw = readFileSync(join(__dirname, "src", "res", "css", "preflight.scss"), "utf-8");
                let preflight = preflightRaw;
                const matches = preflightRaw.matchAll(/(theme)[^"]*/g);

                for (const match of matches) {
                    const instance = preflightRaw.substring(match.index!, match.index! + match[0].length).split(".");
                    const [category, property] = instance.slice(1);
                    preflight = preflight.replace(`"${instance.join(".")}"`, theme[category][property]);
                }

                return preflight;
            }
        }
    ],
    theme: {
        fontFamily: {
            inter: "Inter",
            mono: "JetBrains Mono"
        },
        colors: {
            ...catpuccin,
        },
    },
})
