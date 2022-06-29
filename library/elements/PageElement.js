export class PageElement {
    domElement;
    params;

    constructor(params) {
        this.params = params;
    }

    addBorder() {

    }

    addBackground() {

    }


    getDOMElement() {
        return this.domElement;
    }

    clone() {
        return new PageElement(this.params);
    }

    build() {

    }

    accept(visitor){}
}