import { getRepository } from 'typeorm';
import axios from 'axios';
import { Subpage } from '../entities';
import { parseHTML } from '.';

import config from '../config';
const { SCRAPER_MAX_DEPTH } = config;

export const parseSubpage = async (url: string, current_depth = 1) => {
    const subpagesRepo = getRepository(Subpage);

    if (current_depth > SCRAPER_MAX_DEPTH) return;

    const found = await subpagesRepo.findOne({ where: { path: url } });
    if (found) return;

    const { data } = await axios.get<string>(url);

    const subpage = new Subpage();
    subpage.path = url;
    subpage.html = data;

    // TODO: call `HTMLParser` #53
    const { window } = parseHTML(data);

    // TODO: call `LinksParser` #54
    subpage.referencedLinks = [];

    // TODO: call `WordsParser` #55
    subpage.statistics = [];

    // TODO: call `ImagesParser` #56
    subpage.images = [];

    await subpagesRepo.save(subpage);

    subpage.referencedLinks.forEach((link) => {
        parseSubpage(link.path, current_depth + 1);
    });
};
