import { Component } from "solid-js";

export interface Route {
    name: string;
    path: string;
    icon?: string;

    component: () => Component;
}