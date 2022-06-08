
export class NewsElementBridge {
    newsElement = {}

    constructor(newsElement) {
        this.newsElement = newsElement;
    }

    getDOMElement() {
        return this.newsElement.getDOMElement();

    }

    addBorder() {
        this.newsElement.addBorder();
    }

    addBackground() {
        this.newsElement.addBackground();
    }

    clone() {
        this.newsElement.clone();
    }

    build() {
        this.newsElement.build();
    }
}