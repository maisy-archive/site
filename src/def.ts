import { Component } from "solid-js";

export interface Route {
    name: string;
    path: string;
    hidden?: true;

    component: () => Component;
}