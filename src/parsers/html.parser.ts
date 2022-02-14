import { JSDOM } from 'jsdom';

export const parseHTML = (html_string: string) => {
    const dom = new JSDOM(html_string);
    return dom;
};
