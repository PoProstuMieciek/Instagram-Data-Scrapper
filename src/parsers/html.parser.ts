import { load } from 'cheerio';

export const parseHTML = (html_string: string) => load(html_string);
