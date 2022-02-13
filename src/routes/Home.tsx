import { Route } from "../def";
import Header from "../components/Header";
import Code from "../components/Code";

export default {
    name: "Home",
    path: "/",
    component: () => {
        return (
            <div>
                <Header type="h1">Home</Header>
                <Header type="h2">Home</Header>
                <Header type="h3">Home</Header>
                <Header type="h4">Home</Header>
                <Header type="h5">Home</Header>
                <Header type="h6">Home</Header>
                <Code>Code</Code>
                <p><button onClick={() => { let root = document.getElementById("root"); if(root?.classList.contains("dark")) { root.classList.remove("dark") } else { root?.classList.add("dark") } }}>switch theme</button></p>
            </div>
        );
    },
} as Route;