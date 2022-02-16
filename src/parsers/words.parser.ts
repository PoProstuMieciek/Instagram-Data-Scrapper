import { CheerioAPI } from 'cheerio';

export const padWithLeadingZeros = (string: string) => {
    return new Array(5 - string.length).join('0') + string;
};

export const unicodeCharEscape = (charCode: number) => {
    return '\\u' + padWithLeadingZeros(charCode.toString(16));
};

export const unicodeEscape = (string: string) => {
    return string
        .split('')
        .map((char) => {
            const charCode = char.charCodeAt(0);

            // return charCode > 127 ? '' : char;
            return charCode > 127 ? unicodeCharEscape(charCode) : char;
        })
        .join('');
};

export const parseWords = ($: CheerioAPI) => {
    const stats: { [key: string]: number } = {};

    const text = $('p,span,h1,h2,h3,h4,h5,h6,a,li').text();
    const word_arr = text.toLowerCase().split(/[^\w]/);

    for (const word of word_arr) {
        const new_word = unicodeEscape(word);

        if (!new_word) continue;

        if (stats[new_word]) {
            stats[new_word]++;
        } else {
            stats[new_word] = 1;
        }
    }

    return stats;
};
