export function getUrl(item: { type: string; id: string; category?: string }) {
    switch (item.type){
        case "news":
            return `/news/${item.id}`;

        case "organization":
            return `/organizations/${item.category}/${item.id}`;

        case "qa":
            return `/qa/${item.id}`;

            default:
                return "/";
    }
}