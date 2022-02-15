import { JSDOM } from 'jsdom';

export const parseLinks = (dom: JSDOM) => {
    const document = dom.window.document;
    const anchors = document.querySelectorAll('a');
    const anchors_arr = Array.from(anchors);
    const href_arr = anchors_arr.map((a) => a.href);
    return href_arr;
};
