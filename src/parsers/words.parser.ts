import { JSDOM } from 'jsdom';

export const parseWords = (dom: JSDOM) => {
    const document = dom.window.document;
    const words: { [key: string]: number } = {};
    const p_arr = Array.from(document.querySelectorAll('p')).map(
        (p) => p.textContent
    );
    const span_arr = Array.from(document.querySelectorAll('span')).map(
        (span) => span.textContent
    );
    const tags_arr = Array.from(document.querySelectorAll('tags')).map(
        (tags) => tags.textContent
    );
    const arr = p_arr.concat(span_arr).concat(tags_arr);
    arr.forEach((text) => {
        let word_arr = (text as unknown as string).split(' ');
        word_arr.forEach((word) => {
            if (words[word]) {
                words[word]++;
            } else {
                words[word] = 1;
            }
        });
    });
    return words;
};
