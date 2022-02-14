import { JSDOM } from 'jsdom';

export const parseLinks = (dom: JSDOM) => {
    let links: string[] = [];
    const document = dom.window.document;
    let anchors = document.querySelectorAll("a");
    anchors.forEach(
        function(value, idx, list){
            links.push(value.href);
        }
    );
    return links;
};