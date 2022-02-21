import { load } from 'cheerio';

/**
 * Function that gets a HTML string and returns object similar to `window.document` object in browser
 * Uses: `cheerio` parsing library
 */
export const parseHTML = (html_string: string) => load(html_string);
