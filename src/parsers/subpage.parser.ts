import { getRepository } from 'typeorm';
import axios from 'axios';
import { StatisticsEntry, Subpage } from '../entities';
import { parseHTML, parseLinks, parseWords } from '.';
import Logger from '../utils/ConsoleLogger';

import config from '../config';
const { SCRAPER_MAX_DEPTH } = config;

/**
 * Main function that gets a website url string and creates a database entry with links and word statistics.
 */
export const parseSubpage = async (url: string, current_depth = 1) => {
    const subpagesRepo = getRepository(Subpage);

    if (current_depth > SCRAPER_MAX_DEPTH) return;

    let subpage = await subpagesRepo
        .createQueryBuilder('user')
        .where('user.path = :path', { path: url })
        .getOne();

    if (subpage?.visited) return;

    try {
        const { data } = await axios.get<string>(url);

        const dom = parseHTML(data);

        if (!subpage) subpage = new Subpage();

        subpage.path = url;
        subpage.visited = true;

        subpage.referencedLinks = parseLinks(dom, url).map((link) => {
            return {
                path: link
            } as Subpage;
        });

        subpage.statistics = Object.entries(parseWords(dom)).map(
            ([word, occurences]) => {
                return {
                    word,
                    occurences
                } as StatisticsEntry;
            }
        );

        // subpage.images = await Promise.all(
        //     parseImages(dom).map(async (href) => {
        //         const s = new Image();

        //         const { data } = await axios.get(href);
        //         const obj = await objectStoreProvider.upload(randomUUID(), data);

        //         s.etag = obj.ETag || '';

        //         return s;
        //     })
        // );

        subpagesRepo.save(subpage);
    } catch (err) {
        Logger.error(err);
    }

    subpage?.referencedLinks?.forEach(({ path }) => {
        parseSubpage(path, current_depth + 1);
    });
};
