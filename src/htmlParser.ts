import { JSDOM } from 'jsdom';

function html_parser(html_string:string):JSDOM{
    const dom = new JSDOM(html_string);
    return dom;
}