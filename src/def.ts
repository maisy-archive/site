import { RouteDefinition } from "solid-app-router";
import { setSetting, getSetting } from "./lib";

export type Route = RouteDefinition & {
    name: string;
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