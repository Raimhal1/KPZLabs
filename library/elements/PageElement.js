export class PageElement {
    domElement;
    params;

    constructor(params) {
        this.params = params;
    }

    getDOMElement() {
        return this.domElement;
    }

    clone() {
        return new PageElement(this.params);
    }
}