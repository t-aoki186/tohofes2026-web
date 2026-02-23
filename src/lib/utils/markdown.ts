import { marked } from "marked";

export function mdToHtml(markdown: string) {
    return marked(markdown);
}