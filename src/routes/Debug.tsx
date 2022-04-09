import { PageRoute } from "../def";
import Header from "../components/Header";
import Code from "../components/Code";

export default {
    name: "Debug",
    path: "/debug",
    component: () => {
        return (
            <>
                <div className="mt-4">
                    <Header type="h1" className="mb-4">
                        Debug
                    </Header>
                    <div>
                        <Header type="h6">UserAgent</Header>
                        <Code>{navigator.userAgent}</Code>
                    </div>
                    <div>
                        <Header type="h6">SettingsStore</Header>
                        <Code>{localStorage.getItem("SettingsStore")}</Code>
                    </div>
                </div>
            </>
        );
    },
} as PageRoute;
