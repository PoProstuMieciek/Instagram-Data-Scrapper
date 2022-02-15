import { JSDOM } from 'jsdom';

export const parseImages = (jsdom: JSDOM) => {
    const images = jsdom.window.document.querySelectorAll('img');
    const images_arr = Array.from(images);

    const href_arr = images_arr.map((img) => img.src);
    return href_arr;
};
