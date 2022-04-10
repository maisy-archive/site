import { Component } from "solid-js";
import { setSetting, getSetting } from "./lib";

export type Route = {
    name: string;
    path: string;
    component: () => Component;
}

export type PageRoute = Route & {
    icon?: string;
}

export type ArticleRoute = Route & {
    description: string;
    date: Date;
    tags: string[];
}

export interface SettingsStore {
    darkMode: boolean;
    ergonomicMode: boolean;
}

declare global {
    interface Window { SettingsStore: SettingsStore; }
}