function getPrimaryCategory(category?: string) {
    if (!category || typeof category !== 'string') {
        return '';
    }
    return category.split(',')[0].trim();
}

export function getUrl(item: { type: string; id: string; category?: string }) {
    switch (item.type){
        case "news":
            return `/news/${item.id}`;

        case "organization":
            return `/organizations/${getPrimaryCategory(item.category)}/${item.id}`;

        case "qa":
            return `/qa/${item.id}`;

            default:
                return "/";
    }
}