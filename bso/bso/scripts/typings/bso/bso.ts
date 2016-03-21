/// <reference path="../jquery/jquery.d.ts" />
//module BSO {

declare type Creator = () => HTMLElement;
declare type ElementArray = Array<HTMLElement>;
declare type ElementCreator = Creator | ElementArray;
interface HTMLArticleElement extends HTMLElement{ }
interface HTMLHeaderElement extends HTMLElement { }
interface HTMLFooterElement extends HTMLElement { }
interface HTMLSectionElement extends HTMLElement { }

interface BsoPropertyChanged
{
    BsoOnChanged: (name: string, oldValue: any, newValue: any) => void;
}
function GetProxy<T>(t: T, usePrototype?: boolean): T 
{
    var res = {};
    Object.defineProperty(res, 'BsoInnerObject',
        {
            get: () => res["__BsoInnerObject"],
            set: value=> res["__BsoInnerObject"] = value,
            value: t
        });
    res['BsoOnChanged'] = function (name: string, oldValue: any, newValue: any): void
    {

    };
    var inner = res["__BsoInnerObject"] as T;
  //  res["__BsoInnerObject"] = t;
    var props = usePrototype ? Object.getOwnPropertyNames(Object.getPrototypeOf(t)) : Object.getOwnPropertyNames(t);
    for (var i in props)
    {
        var tmp = props[i];
        Object.defineProperty(res, tmp,
            {
                configurable: true,
                enumerable: true,
                writable: true,
                
            });
    }
    
    return res as T;
}
function Tmp<T extends HTMLElement>(tag: string, act?: (t: T) => any, ...content: ElementCreator[]): T {
    var el = document.createElement(tag) as T;
    if (act)
        act(el);
    for (var e in content) {
        var em = content[e];
        if (Array.isArray(em)) {
            var tmp1 = em as Array<HTMLElement>;
            for (var x in tmp1) {
                el.appendChild(tmp1[x]);
            }
        }
        else {
            var tmp2 = em as Creator;
            el.appendChild(tmp2());
        }
    }
    return el;
}
function article(act?: (t: HTMLArticleElement) => any, ...content: ElementCreator[]): HTMLArticleElement {  
    return Tmp<HTMLArticleElement>('article', act, ...content);
}
function header(act?: (t: HTMLHeaderElement) => any, ...content: ElementCreator[]): HTMLHeaderElement {
    return Tmp<HTMLHeaderElement>('header', act, ...content);
}
function footer(act?: (t: HTMLFooterElement) => any, ...content: ElementCreator[]): HTMLFooterElement {
    return Tmp<HTMLFooterElement>('footer', act, ...content);
}
function section(act?: (t: HTMLSectionElement) => any, ...content: ElementCreator[]): HTMLSectionElement {
    return Tmp<HTMLSectionElement>('section', act, ...content);
}
function div(act?: (t: HTMLDivElement) => any, ...content: ElementCreator[]): HTMLDivElement {
    return Tmp<HTMLDivElement>('div', act, ...content);
}
function button(act?: (t: HTMLButtonElement) => any, ...content: ElementCreator[]): HTMLButtonElement {
    return Tmp<HTMLButtonElement>('button', act, ...content);
}
function a(act?: (t: HTMLAnchorElement) => any, ...content: ElementCreator[]): HTMLAnchorElement {
    return Tmp<HTMLAnchorElement>('a', act, ...content);
}
function applet(act?: (t: HTMLAppletElement) => any, ...content: ElementCreator[]): HTMLAppletElement {
    return Tmp<HTMLAppletElement>('applet', act, ...content);
}
function area(act?: (t: HTMLAppletElement) => any, ...content: ElementCreator[]): HTMLAppletElement {
    return Tmp<HTMLAppletElement>('area', act, ...content);
}
function audio(act?: (t: HTMLAudioElement) => any, ...content: ElementCreator[]): HTMLAudioElement {
    return Tmp<HTMLAudioElement>('audio', act, ...content);
}
function br(act?: (t: HTMLBRElement) => any, ...content: ElementCreator[]): HTMLBRElement {
    return Tmp<HTMLBRElement>('br', act, ...content);
}
function base(act?: (t: HTMLBaseElement) => any, ...content: ElementCreator[]): HTMLBaseElement {
    return Tmp<HTMLBaseElement>('base', act, ...content);
}
function basefont(act?: (t: HTMLBaseFontElement) => any, ...content: ElementCreator[]): HTMLBaseFontElement {
    return Tmp<HTMLBaseFontElement>('basefont', act, ...content);
}
function address(act?: (t: HTMLBlockElement) => any, ...content: ElementCreator[]): HTMLBlockElement {
    return Tmp<HTMLBlockElement>('address', act, ...content);
}
function blockquote(act?: (t: HTMLBlockElement) => any, ...content: ElementCreator[]): HTMLBlockElement {
    return Tmp<HTMLBlockElement>('blockquote', act, ...content);
}
function center(act?: (t: HTMLBlockElement) => any, ...content: ElementCreator[]): HTMLBlockElement {
    return Tmp<HTMLBlockElement>('center', act, ...content);
}
function keygen(act?: (t: HTMLBlockElement) => any, ...content: ElementCreator[]): HTMLBlockElement {
    return Tmp<HTMLBlockElement>('keygen', act, ...content);
}
function listing(act?: (t: HTMLBlockElement) => any, ...content: ElementCreator[]): HTMLBlockElement {
    return Tmp<HTMLBlockElement>('listing', act, ...content);
}
function plaintext(act?: (t: HTMLBlockElement) => any, ...content: ElementCreator[]): HTMLBlockElement {
    return Tmp<HTMLBlockElement>('plaintext', act, ...content);
}
function xmp(act?: (t: HTMLBlockElement) => any, ...content: ElementCreator[]): HTMLBlockElement {
    return Tmp<HTMLBlockElement>('xmp', act, ...content);
}
function abbr(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('abbr', act, ...content);
}
function acronym(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('acronym', act, ...content);
}
function b(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('b', act, ...content);
}
function bdo(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('bdo', act, ...content);
}
function big(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('big', act, ...content);
}
function cite(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('cite', act, ...content);
}
function code(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('code', act, ...content);
}
function dfn(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('dfn', act, ...content);
}
function em(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('em', act, ...content);
}
function i(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('i', act, ...content);
}
function kbd(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('kbd', act, ...content);
}
function nobr(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('nobr', act, ...content);
}
function rt(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('rt', act, ...content);
}
function ruby(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('ruby', act, ...content);
}
function s(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('s', act, ...content);
}
function samp(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('samp', act, ...content);
}
function small(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('small', act, ...content);
}
function strike(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('strike', act, ...content);
}
function strong(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('strong', act, ...content);
}
function sub(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('sub', act, ...content);
}
function sup(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('sup', act, ...content);
}
function tt(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('tt', act, ...content);
}
function u(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('u', act, ...content);
}
function body(act?: (t: HTMLBodyElement) => any, ...content: ElementCreator[]): HTMLBodyElement {
    return Tmp<HTMLBodyElement>('body', act, ...content);
}
function canvas(act?: (t: HTMLCanvasElement) => any, ...content: ElementCreator[]): HTMLCanvasElement {
    return Tmp<HTMLCanvasElement>('canvas', act, ...content);
}
function caption(act?: (t: HTMLTableCaptionElement) => any, ...content: ElementCreator[]): HTMLTableCaptionElement {
    return Tmp<HTMLTableCaptionElement>('caption', act, ...content);
}
function col(act?: (t: HTMLTableColElement) => any, ...content: ElementCreator[]): HTMLTableColElement {
    return Tmp<HTMLTableColElement>('col', act, ...content);
}
function colgroup(act?: (t: HTMLTableColElement) => any, ...content: ElementCreator[]): HTMLTableColElement {
    return Tmp<HTMLTableColElement>('colgroup', act, ...content);
}
function datalist(act?: (t: HTMLDataListElement) => any, ...content: ElementCreator[]): HTMLDataListElement {
    return Tmp<HTMLDataListElement>('datalist', act, ...content);
}
function dd(act?: (t: HTMLDDElement) => any, ...content: ElementCreator[]): HTMLDDElement {
    return Tmp<HTMLDDElement>('dd', act, ...content);
}
function del(act?: (t: HTMLModElement) => any, ...content: ElementCreator[]): HTMLModElement {
    return Tmp<HTMLModElement>('del', act, ...content);
}
function ins(act?: (t: HTMLModElement) => any, ...content: ElementCreator[]): HTMLModElement {
    return Tmp<HTMLModElement>('ins', act, ...content);
}
function dir(act?: (t: HTMLDirectoryElement) => any, ...content: ElementCreator[]): HTMLDirectoryElement {
    return Tmp<HTMLDirectoryElement>('dir', act, ...content);
}
function dl(act?: (t: HTMLDListElement) => any, ...content: ElementCreator[]): HTMLDListElement {
    return Tmp<HTMLDListElement>('dl', act, ...content);
}
function dt(act?: (t: HTMLDTElement) => any, ...content: ElementCreator[]): HTMLDTElement {
    return Tmp<HTMLDTElement>('dt', act, ...content);
}
function embed(act?: (t: HTMLEmbedElement) => any, ...content: ElementCreator[]): HTMLEmbedElement {
    return Tmp<HTMLEmbedElement>('embed', act, ...content);
}
function fieldset(act?: (t: HTMLFieldSetElement) => any, ...content: ElementCreator[]): HTMLFieldSetElement {
    return Tmp<HTMLFieldSetElement>('fieldset', act, ...content);
}
function font(act?: (t: HTMLFontElement) => any, ...content: ElementCreator[]): HTMLFontElement {
    return Tmp<HTMLFontElement>('font', act, ...content);
}
function form(act?: (t: HTMLFormElement) => any, ...content: ElementCreator[]): HTMLFormElement {
    return Tmp<HTMLFormElement>('form', act, ...content);
}
function frame(act?: (t: HTMLFrameElement) => any, ...content: ElementCreator[]): HTMLFrameElement {
    return Tmp<HTMLFrameElement>('frame', act, ...content);
}
function frameset(act?: (t: HTMLFrameSetElement) => any, ...content: ElementCreator[]): HTMLFrameSetElement {
    return Tmp<HTMLFrameSetElement>('frameset', act, ...content);
}
function h1(act?: (t: HTMLHeadingElement) => any, ...content: ElementCreator[]): HTMLHeadingElement {
    return Tmp<HTMLHeadingElement>('h1', act, ...content);
}
function h2(act?: (t: HTMLHeadingElement) => any, ...content: ElementCreator[]): HTMLHeadingElement {
    return Tmp<HTMLHeadingElement>('h2', act, ...content);
}
function h3(act?: (t: HTMLHeadingElement) => any, ...content: ElementCreator[]): HTMLHeadingElement {
    return Tmp<HTMLHeadingElement>('h3', act, ...content);
}
function h4(act?: (t: HTMLHeadingElement) => any, ...content: ElementCreator[]): HTMLHeadingElement {
    return Tmp<HTMLHeadingElement>('h4', act, ...content);
}
function h5(act?: (t: HTMLHeadingElement) => any, ...content: ElementCreator[]): HTMLHeadingElement {
    return Tmp<HTMLHeadingElement>('h5', act, ...content);
}
function h6(act?: (t: HTMLHeadingElement) => any, ...content: ElementCreator[]): HTMLHeadingElement {
    return Tmp<HTMLHeadingElement>('h6', act, ...content);
}
function head(act?: (t: HTMLHeadElement) => any, ...content: ElementCreator[]): HTMLHeadElement {
    return Tmp<HTMLHeadElement>('head', act, ...content);
}
function hr(act?: (t: HTMLHRElement) => any, ...content: ElementCreator[]): HTMLHRElement {
    return Tmp<HTMLHRElement>('hr', act, ...content);
}
function html(act?: (t: HTMLHtmlElement) => any, ...content: ElementCreator[]): HTMLHtmlElement {
    return Tmp<HTMLHtmlElement>('html', act, ...content);
}
function iframe(act?: (t: HTMLIFrameElement) => any, ...content: ElementCreator[]): HTMLIFrameElement {
    return Tmp<HTMLIFrameElement>('iframe', act, ...content);
}
function img(act?: (t: HTMLImageElement) => any, ...content: ElementCreator[]): HTMLImageElement {
    return Tmp<HTMLImageElement>('img', act, ...content);
}
function inputButton(act?: (t: HTMLInputElement) => any, ...content: ElementCreator[]): HTMLInputElement {
    var res = Tmp<HTMLInputElement>('input', act, ...content);
    res.type = 'button';
    return res;
}
function inputCheckbox(act?: (t: HTMLInputElement) => any, ...content: ElementCreator[]): HTMLInputElement {
    var res = Tmp<HTMLInputElement>('input', act, ...content);
    res.type = 'checkbox';
    return res;
} function inputFile(act?: (t: HTMLInputElement) => any, ...content: ElementCreator[]): HTMLInputElement {
    var res = Tmp<HTMLInputElement>('input', act, ...content);
    res.type = 'file';
    return res;
}
function inputHidden(act?: (t: HTMLInputElement) => any, ...content: ElementCreator[]): HTMLInputElement {
    var res = Tmp<HTMLInputElement>('input', act, ...content);
    res.type = 'hidden';
    return res;
}
function inputImage(act?: (t: HTMLInputElement) => any, ...content: ElementCreator[]): HTMLInputElement {
    var res = Tmp<HTMLInputElement>('input', act, ...content);
    res.type = 'image';
    return res;
}
function inputPassword(act?: (t: HTMLInputElement) => any, ...content: ElementCreator[]): HTMLInputElement {
    var res = Tmp<HTMLInputElement>('input', act, ...content);
    res.type = 'password';
    return res;
}
function inputRadio(act?: (t: HTMLInputElement) => any, ...content: ElementCreator[]): HTMLInputElement {
    var res = Tmp<HTMLInputElement>('input', act, ...content);
    res.type = 'radio';
    return res;
}
function inputReset(act?: (t: HTMLInputElement) => any, ...content: ElementCreator[]): HTMLInputElement {
    var res = Tmp<HTMLInputElement>('input', act, ...content);
    res.type = 'reset';
    return res;
}
function inputSubmit(act?: (t: HTMLInputElement) => any, ...content: ElementCreator[]): HTMLInputElement {
    var res = Tmp<HTMLInputElement>('input', act, ...content);
    res.type = 'submit';
    return res;
}
function inputText(act?: (t: HTMLInputElement) => any, ...content: ElementCreator[]): HTMLInputElement {
    var res = Tmp<HTMLInputElement>('input', act, ...content);
    res.type = 'text';
    return res;
}
function inputColor(act?: (t: HTMLInputElement) => any, ...content: ElementCreator[]): HTMLInputElement {
    var res = Tmp<HTMLInputElement>('input', act, ...content);
    res.type = 'color';
    return res;
}
function inputDate(act?: (t: HTMLInputElement) => any, ...content: ElementCreator[]): HTMLInputElement {
    var res = Tmp<HTMLInputElement>('input', act, ...content);
    res.type = 'date';
    return res;
}
function inputDatetime(act?: (t: HTMLInputElement) => any, ...content: ElementCreator[]): HTMLInputElement {
    var res = Tmp<HTMLInputElement>('input', act, ...content);
    res.type = 'datetime';
    return res;
}
function inputDatetimeLocal(act?: (t: HTMLInputElement) => any, ...content: ElementCreator[]): HTMLInputElement {
    var res = Tmp<HTMLInputElement>('input', act, ...content);
    res.type = 'datetime-local';
    return res;
}
function inputEmail(act?: (t: HTMLInputElement) => any, ...content: ElementCreator[]): HTMLInputElement {
    var res = Tmp<HTMLInputElement>('input', act, ...content);
    res.type = 'email';
    return res;
}
function inputNumber(act?: (t: HTMLInputElement) => any, ...content: ElementCreator[]): HTMLInputElement {
    var res = Tmp<HTMLInputElement>('input', act, ...content);
    res.type = 'number';
    return res;
}
function inputRange(act?: (t: HTMLInputElement) => any, ...content: ElementCreator[]): HTMLInputElement {
    var res = Tmp<HTMLInputElement>('input', act, ...content);
    res.type = 'range';
    return res;
}
function inputSearch(act?: (t: HTMLInputElement) => any, ...content: ElementCreator[]): HTMLInputElement {
    var res = Tmp<HTMLInputElement>('input', act, ...content);
    res.type = 'search';
    return res;
}
function inputTel(act?: (t: HTMLInputElement) => any, ...content: ElementCreator[]): HTMLInputElement {
    var res = Tmp<HTMLInputElement>('input', act, ...content);
    res.type = 'tel';
    return res;
}
function inputTime(act?: (t: HTMLInputElement) => any, ...content: ElementCreator[]): HTMLInputElement {
    var res = Tmp<HTMLInputElement>('input', act, ...content);
    res.type = 'time';
    return res;
}
function inputUrl(act?: (t: HTMLInputElement) => any, ...content: ElementCreator[]): HTMLInputElement {
    var res = Tmp<HTMLInputElement>('input', act, ...content);
    res.type = 'url';
    return res;
}
function inputMonth(act?: (t: HTMLInputElement) => any, ...content: ElementCreator[]): HTMLInputElement {
    var res = Tmp<HTMLInputElement>('input', act, ...content);
    res.type = 'month';
    return res;
}
function inputWeek(act?: (t: HTMLInputElement) => any, ...content: ElementCreator[]): HTMLInputElement {
    var res = Tmp<HTMLInputElement>('input', act, ...content);
    res.type = 'week';
    return res;
}
function isindex(act?: (t: HTMLIsIndexElement) => any, ...content: ElementCreator[]): HTMLIsIndexElement {
    return Tmp<HTMLIsIndexElement>('isindex', act, ...content);
}
function label(act?: (t: HTMLLabelElement) => any, ...content: ElementCreator[]): HTMLLabelElement {
    return Tmp<HTMLLabelElement>('label', act, ...content);
}
function legend(act?: (t: HTMLLegendElement) => any, ...content: ElementCreator[]): HTMLLegendElement {
    return Tmp<HTMLLegendElement>('legend', act, ...content);
}
function li(act?: (t: HTMLLIElement) => any, ...content: ElementCreator[]): HTMLLIElement {
    return Tmp<HTMLLIElement>('li', act, ...content);
}
function link(act?: (t: HTMLLinkElement) => any, ...content: ElementCreator[]): HTMLLinkElement {
    return Tmp<HTMLLinkElement>('link', act, ...content);
}
function map(act?: (t: HTMLMapElement) => any, ...content: ElementCreator[]): HTMLMapElement {
    return Tmp<HTMLMapElement>('map', act, ...content);
}
function marquee(act?: (t: HTMLMarqueeElement) => any, ...content: ElementCreator[]): HTMLMarqueeElement {
    return Tmp<HTMLMarqueeElement>('marquee', act, ...content);
}
function menu(act?: (t: HTMLMenuElement) => any, ...content: ElementCreator[]): HTMLMenuElement {
    return Tmp<HTMLMenuElement>('menu', act, ...content);
}
function meta(act?: (t: HTMLMetaElement) => any, ...content: ElementCreator[]): HTMLMetaElement {
    return Tmp<HTMLMetaElement>('meta', act, ...content);
}
function nextid(act?: (t: HTMLNextIdElement) => any, ...content: ElementCreator[]): HTMLNextIdElement {
    return Tmp<HTMLNextIdElement>('nextid', act, ...content);
}
function object(act?: (t: HTMLObjectElement) => any, ...content: ElementCreator[]): HTMLObjectElement {
    return Tmp<HTMLObjectElement>('object', act, ...content);
}
function ol(act?: (t: HTMLOListElement) => any, ...content: ElementCreator[]): HTMLOListElement {
    return Tmp<HTMLOListElement>('ol', act, ...content);
}
function optgroup(act?: (t: HTMLOptGroupElement) => any, ...content: ElementCreator[]): HTMLOptGroupElement {
    return Tmp<HTMLOptGroupElement>('optgroup', act, ...content);
}
function option(act?: (t: HTMLOptionElement) => any, ...content: ElementCreator[]): HTMLOptionElement {
    return Tmp<HTMLOptionElement>('option', act, ...content);
}
function p(act?: (t: HTMLParagraphElement) => any, ...content: ElementCreator[]): HTMLParagraphElement {
    return Tmp<HTMLParagraphElement>('p', act, ...content);
}
function param(act?: (t: HTMLParamElement) => any, ...content: ElementCreator[]): HTMLParamElement {
    return Tmp<HTMLParamElement>('param', act, ...content);
}
function pre(act?: (t: HTMLPreElement) => any, ...content: ElementCreator[]): HTMLPreElement {
    return Tmp<HTMLPreElement>('pre', act, ...content);
}
function progress(act?: (t: HTMLProgressElement) => any, ...content: ElementCreator[]): HTMLProgressElement {
    return Tmp<HTMLProgressElement>('progress', act, ...content);
}
function q(act?: (t: HTMLQuoteElement) => any, ...content: ElementCreator[]): HTMLQuoteElement {
    return Tmp<HTMLQuoteElement>('q', act, ...content);
}
function script(act?: (t: HTMLScriptElement) => any, ...content: ElementCreator[]): HTMLScriptElement {
    return Tmp<HTMLScriptElement>('script', act, ...content);
}
function select(act?: (t: HTMLSelectElement) => any, ...content: ElementCreator[]): HTMLSelectElement {
    return Tmp<HTMLSelectElement>('select', act, ...content);
}
function source(act?: (t: HTMLSourceElement) => any, ...content: ElementCreator[]): HTMLSourceElement {
    return Tmp<HTMLSourceElement>('source', act, ...content);
}
function span(act?: (t: HTMLSpanElement) => any, ...content: ElementCreator[]): HTMLSpanElement {
    return Tmp<HTMLSpanElement>('span', act, ...content);
}
function style(act?: (t: HTMLStyleElement) => any, ...content: ElementCreator[]): HTMLStyleElement {
    return Tmp<HTMLStyleElement>('style', act, ...content);
}
function table(act?: (t: HTMLTableElement) => any, ...content: ElementCreator[]): HTMLTableElement {
    return Tmp<HTMLTableElement>('table', act, ...content);
}
function tbody(act?: (t: HTMLTableSectionElement) => any, ...content: ElementCreator[]): HTMLTableSectionElement {
    return Tmp<HTMLTableSectionElement>('tbody', act, ...content);
}
function tfoot(act?: (t: HTMLTableSectionElement) => any, ...content: ElementCreator[]): HTMLTableSectionElement {
    return Tmp<HTMLTableSectionElement>('tfoot', act, ...content);
}
function thead(act?: (t: HTMLTableSectionElement) => any, ...content: ElementCreator[]): HTMLTableSectionElement {
    return Tmp<HTMLTableSectionElement>('thead', act, ...content);
}
function td(act?: (t: HTMLTableDataCellElement) => any, ...content: ElementCreator[]): HTMLTableDataCellElement {
    return Tmp<HTMLTableDataCellElement>('td', act, ...content);
}
function textarea(act?: (t: HTMLTextAreaElement) => any, ...content: ElementCreator[]): HTMLTextAreaElement {
    return Tmp<HTMLTextAreaElement>('textarea', act, ...content);
}
function th(act?: (t: HTMLTableHeaderCellElement) => any, ...content: ElementCreator[]): HTMLTableHeaderCellElement {
    return Tmp<HTMLTableHeaderCellElement>('th', act, ...content);
}
function title(act?: (t: HTMLTitleElement) => any, ...content: ElementCreator[]): HTMLTitleElement {
    return Tmp<HTMLTitleElement>('title', act, ...content);
}
function tr(act?: (t: HTMLTableRowElement) => any, ...content: ElementCreator[]): HTMLTableRowElement {
    return Tmp<HTMLTableRowElement>('tr', act, ...content);
}
function track(act?: (t: HTMLTrackElement) => any, ...content: ElementCreator[]): HTMLTrackElement {
    return Tmp<HTMLTrackElement>('track', act, ...content);
}
function ul(act?: (t: HTMLUListElement) => any, ...content: ElementCreator[]): HTMLUListElement {
    return Tmp<HTMLUListElement>('ul', act, ...content);
}
function xMsWebview(act?: (t: MSHTMLWebViewElement) => any, ...content: ElementCreator[]): MSHTMLWebViewElement {
    return Tmp<MSHTMLWebViewElement>('x-ms-webview', act, ...content);
}
/**
 * конфликт с ключевым словом var
 * @param act
 * @param content
 */
function Var(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('var', act, ...content);
}
//}
module Color {
    export const IndianRed = "IndianRed";
    export const LightCoral = "LightCoral";
    export const Salmon = "Salmon";
    export const DarkSalmon = "DarkSalmon";
    export const LightSalmon = "LightSalmon";
    export const Crimson = "Crimson";
    export const Red = "Red";
    export const FireBrick = "FireBrick";
    export const DarkRed = "DarkRed";
    export const Pink = "Pink";
    export const LightPink = "LightPink";
    export const HotPink = "HotPink";
    export const DeepPink = "DeepPink";
    export const MediumVioletRed = "MediumVioletRed";
    export const PaleVioletRed = "PaleVioletRed";
    export const Coral = "Coral";
    export const Tomato = "Tomato";
    export const OrangeRed = "OrangeRed";
    export const DarkOrange = "DarkOrange";
    export const Orange = "Orange";
    export const Gold = "Gold";
    export const Yellow = "Yellow";
    export const LightYellow = "LightYellow";
    export const LemonChiffon = "LemonChiffon";
    export const LightGoldenrodYellow = "LightGoldenrodYellow";
    export const PapayaWhip = "PapayaWhip";
    export const Moccasin = "Moccasin";
    export const PeachPuff = "PeachPuff";
    export const PaleGoldenrod = "PaleGoldenrod";
    export const Khaki = "Khaki";
    export const DarkKhaki = "DarkKhaki";
    export const Lavender = "Lavender";
    export const Thistle = "Thistle";
    export const Plum = "Plum";
    export const Violet = "Violet";
    export const Orchid = "Orchid";
    export const Fuchsia = "Fuchsia";
    export const Magenta = "Magenta";
    export const MediumOrchid = "MediumOrchid";
    export const MediumPurple = "MediumPurple";
    export const Amethyst = "MediumPurple";
    export const BlueViolet = "BlueViolet";
    export const DarkViolet = "DarkViolet";
    export const DarkOrchid = "DarkOrchid";
    export const DarkMagenta = "DarkMagenta";
    export const Purple = "Purple";
    export const Indigo = "Indigo";
    export const SlateBlue = "SlateBlue";
    export const DarkSlateBlue = "DarkSlateBlue";
    export const MediumSlateBlue = "MediumSlateBlue";
    export const GreenYellow = "GreenYellow";
    export const Chartreuse = "Chartreuse";
    export const LawnGreen = "LawnGreen";
    export const Lime = "Lime";
    export const LimeGreen = "LimeGreen";
    export const PaleGreen = "PaleGreen";
    export const LightGreen = "LightGreen";
    export const MediumSpringGreen = "MediumSpringGreen";
    export const SpringGreen = "SpringGreen";
    export const MediumSeaGreen = "MediumSeaGreen";
    export const SeaGreen = "SeaGreen";
    export const ForestGreen = "ForestGreen";
    export const Green = "Green";
    export const DarkGreen = "DarkGreen";
    export const YellowGreen = "YellowGreen";
    export const OliveDrab = "OliveDrab";
    export const Olive = "Olive";
    export const DarkOliveGreen = "DarkOliveGreen";
    export const MediumAquamarine = "MediumAquamarine";
    export const DarkSeaGreen = "DarkSeaGreen";
    export const LightSeaGreen = "LightSeaGreen";
    export const DarkCyan = "DarkCyan";
    export const Teal = "Teal";
    export const Aqua = "Aqua";
    export const Cyan = "Cyan";
    export const LightCyan = "LightCyan";
    export const PaleTurquoise = "PaleTurquoise";
    export const Aquamarine = "Aquamarine";
    export const Turquoise = "Turquoise";
    export const MediumTurquoise = "MediumTurquoise";
    export const DarkTurquoise = "DarkTurquoise";
    export const CadetBlue = "CadetBlue";
    export const SteelBlue = "SteelBlue";
    export const LightSteelBlue = "LightSteelBlue";
    export const PowderBlue = "PowderBlue";
    export const LightBlue = "LightBlue";
    export const SkyBlue = "SkyBlue";
    export const LightSkyBlue = "LightSkyBlue";
    export const DeepSkyBlue = "DeepSkyBlue";
    export const DodgerBlue = "DodgerBlue";
    export const CornflowerBlue = "CornflowerBlue";
    export const RoyalBlue = "RoyalBlue";
    export const Blue = "Blue";
    export const MediumBlue = "MediumBlue";
    export const DarkBlue = "DarkBlue";
    export const Navy = "Navy";
    export const MidnightBlue = "MidnightBlue";
    export const Cornsilk = "Cornsilk";
    export const BlanchedAlmond = "BlanchedAlmond";
    export const Bisque = "Bisque";
    export const NavajoWhite = "NavajoWhite";
    export const Wheat = "Wheat";
    export const BurlyWood = "BurlyWood";
    export const Tan = "Tan";
    export const RosyBrown = "RosyBrown";
    export const SandyBrown = "SandyBrown";
    export const Goldenrod = "Goldenrod";
    export const DarkGoldenrod = "DarkGoldenrod";
    export const Peru = "Peru";
    export const Chocolate = "Chocolate";
    export const SaddleBrown = "SaddleBrown";
    export const Sienna = "Sienna";
    export const Brown = "Brown";
    export const Maroon = "Maroon";
    export const White = "White";
    export const Snow = "Snow";
    export const Honeydew = "Honeydew";
    export const MintCream = "MintCream";
    export const Azure = "Azure";
    export const AliceBlue = "AliceBlue";
    export const GhostWhite = "GhostWhite";
    export const WhiteSmoke = "WhiteSmoke";
    export const Seashell = "Seashell";
    export const Beige = "Beige";
    export const OldLace = "OldLace";
    export const FloralWhite = "FloralWhite";
    export const Ivory = "Ivory";
    export const AntiqueWhite = "AntiqueWhite";
    export const Linen = "Linen";
    export const LavenderBlush = "LavenderBlush";
    export const MistyRose = "MistyRose";
    export const Gainsboro = "Gainsboro";
    export const LightGrey = "LightGrey";
    export const Silver = "Silver";
    export const DarkGray = "DarkGray";
    export const Gray = "Gray";
    export const DimGray = "DimGray";
    export const LightSlateGray = "LightSlateGray";
    export const SlateGray = "SlateGray";
    export const DarkSlateGray = "DarkSlateGray";
    export const Black = "Black";
}
module Display {
    export const block = "block";
    export const inline = "inline";
    export const inline_block = "inline-block";
    export const inline_table = "inline-table";
    export const list_item = "list-item";
    export const none = "none";
    export const run_in = "run-in";
    export const table = "";
    export const table_caption = "table";
    export const table_cell = "table-caption";
    export const table_column = "table-column";
    export const table_column_group = "table-column-group";
    export const table_footer_group = "table-footer-group";
    export const table_header_group = "table-header-group";
    export const table_row = "table-row";
    export const table_row_group = "table-row-group";
}
module Visibility {
    export const visible = "visible";
    export const hidden = "hidden";
    export const collapse = "collapse";
    export const inherit = "inherit";
}
module WordBreak {
    export const normal = "normal";
    export const break_all = "break-all";
    export const keep_all = "keep-all";
}
module Align {
    export const bottom = "bottom";
    export const left = "left";
    export const middle = "middle";
    export const right = "right";
    export const top = "top";
}
module VerticalAlign {
    export const baseline = "baseline";
    export const bottom = "bottom";
    export const middle = "middle";
    export const sub = "sub";
    export const Super = "super";
    export const text_bottom = "text-bottom";
    export const text_top = "text-top";
    export const top = "top";
    export const inherit = "inherit";

}
module WordWrap {
    export const normal = "normal";
    export const break_word = "break-word";
    export const inherit = "inherit";
}
module Overflow
{
    export const auto = "auto";
    export const hidden = "hidden";
    export const scroll = "scroll";
    export const visible = "visible";
    export const inherit = "inherit";
}
module TextDecoration
{
    export const blink = "blink";
    export const line_through= "line-through";
    export const overline = "overline";
    export const underline = "underline";
    export const none = "none";
    export const inherit = "inherit";
}
