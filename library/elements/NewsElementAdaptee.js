import {NewsElementOtherLibrary} from "../elementsOtherLibrary/NewsElementOtherLibrary.js";

export class NewsElementAdaptee {
    newsElement = {}

    constructor(params) {
        this.newsElement = new NewsElementOtherLibrary(params);
    }

    getDOMElement() {
        return this.newsElement.getDOM();
    }

    addBorder() {
        this.newsElement.enableBorder();
    }

    addBackground() {
        this.newsElement.enableBackground();
    }

    clone() {
        this.newsElement.copy();
    }

    build() {
        this.newsElement.create();
    }
}