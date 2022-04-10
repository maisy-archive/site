import { PageRoute } from "../def";
import Header from "../components/Header";
import Code from "../components/Code";
import Button from "../components/Button";
import { exampleSettingsStore, getSetting, setSetting } from "../lib";

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
                    <div className="mb-4">
                        <Header type="h6">UserAgent</Header>
                        <Code>{navigator.userAgent}</Code>
                    </div>
                    <div className="mb-4">
                        <Header type="h6">SettingsStore</Header>
                        <p className="mb-1"><Code>{localStorage.getItem("SettingsStore")}</Code></p>
                        <Button
                            onClick={() => {
                                window.SettingsStore = exampleSettingsStore;
                                window.localStorage.removeItem("SettingsStore");
                                window.location.reload();
                            }}
                        >
                            Reset SettingsStore
                        </Button>
                    </div>
                    <div className="mb-4">
                        <Header type="h6">Experiments</Header>
                        <Button onClick={() => {
                            if (getSetting("ergonomicMode")) {
                                setSetting("ergonomicMode", false);
                            } else {
                                setSetting("ergonomicMode", true);
                            }
                            window.location.reload();
                        }}>
                            Toggle ergonomic mode
                        </Button>
                    </div>
                </div>
            </>
        );
    },
} as PageRoute;
