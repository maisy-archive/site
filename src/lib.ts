// TODO: Persistent themes + media queries
export function toggleTheme() {
    let root = document.getElementById("root");
    if (root?.classList.contains("dark")) {
        root?.classList.remove("dark");
    } else {
        root?.classList.add("dark");
    }
}