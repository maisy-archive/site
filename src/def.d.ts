interface Route {
    name: string;
    path: string;
}

interface PageRoute extends Route {
    icon?: string;
}

interface Article {
    title: string;
    description: string;
    date: Date;
    tags: string[];
}

interface Account {
    platform: string;
    username: string;
    url?: string;
    rel?: string;
}

interface Project {
    name: string;
    description: string;
    language?: string;
    stargazers_count: number;
    updated_at: string;
    license?: {
        key: string,
        name: string,
        spdx_id: string,
        url: string,
        node_id: string
    },
    html_url: string;
}
