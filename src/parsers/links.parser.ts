import { CheerioAPI } from 'cheerio';

/**
 * Function that gets CheerioAPI instance and returns a list of links from the website.
 */
export const parseLinks = ($: CheerioAPI, base_url: string) => {
    const anchors_arr = $('a').toArray();

    const href_arr = anchors_arr
        .map((a) => new URL(a.attribs.href, base_url).href)
        .filter((s) => s);

    return href_arr;
};
