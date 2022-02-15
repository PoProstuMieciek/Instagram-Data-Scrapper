import { JSDOM } from 'jsdom';

export const parseWords = (dom: JSDOM) => {
    const document = dom.window.document;

    const p_arr = Array.from(document.querySelectorAll('p')).map(
        (p) => p.textContent || ''
    );
    const span_arr = Array.from(document.querySelectorAll('span')).map(
        (span) => span.textContent || ''
    );

    const arr = [...p_arr, ...span_arr];
    const stats: { [key: string]: number } = {};

    arr.forEach((text) => {
        const word_arr = text.split(' ');

        word_arr.forEach((word) => {
            if (stats[word]) {
                stats[word]++;
            } else {
                stats[word] = 1;
            }
        });
    });

    return stats;
};
