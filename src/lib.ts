import { SettingsStore } from "./def";

export const exampleSettingsStore: SettingsStore = {
    darkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,
    ergonomicMode: false,
}

export function setupSettingsStore() {
    let fetchedSettingsStore = window.localStorage.getItem("SettingsStore");
    if (!fetchedSettingsStore) {
        window.SettingsStore = exampleSettingsStore;
        window.localStorage.setItem("SettingsStore", JSON.stringify(window.SettingsStore));
    } else {
        window.SettingsStore = { ...exampleSettingsStore, ...JSON.parse(fetchedSettingsStore) };
    }
}

export function setSetting(key: keyof SettingsStore, value: any) {
    window.SettingsStore[key] = value;
    window.localStorage.setItem("SettingsStore", JSON.stringify(window.SettingsStore));
}

export function getSetting(key: keyof SettingsStore) {
    return window.SettingsStore[key];
}

export function setTheme() {
    let root = document.getElementById("root");
    if (getSetting("darkMode")) {
        root?.classList.add("dark");
    } else {
        root?.classList.remove("dark");
    }
}

export function toggleTheme() {
    let root = document.getElementById("root");
    if (getSetting("darkMode")) {
        root?.classList.remove("dark");
        setSetting("darkMode", false);
    } else {
        root?.classList.add("dark");
        setSetting("darkMode", true);
    }
}