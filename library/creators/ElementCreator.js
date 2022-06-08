export class ElementCreator {
    create(params) {

    }
    createAndAppendTo(domElement, params) {
        let element = this.create(params);
        element.build();
        domElement.appendChild(element.getDOMElement());
    }
}