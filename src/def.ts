import { Component } from "solid-js";

export interface Route {
    name: string;
    path: string;

    component: () => Component;
}