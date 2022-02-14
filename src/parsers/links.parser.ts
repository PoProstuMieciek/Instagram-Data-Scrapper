import { JSDOM } from 'jsdom';

export const parseLinks = (dom: JSDOM) => {
    const links: string[] = [];
    const document = dom.window.document;
    const anchors = document.querySelectorAll("a");
    anchors.forEach(
        function(value, idx, list){
            links.push(value.href);
        }
    );
    return links;
};