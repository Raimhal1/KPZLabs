import {PageElement} from "../elements/PageElement.js";

export class NewsProxy extends PageElement {
    #pageElement


    constructor(pageElement){
        super()
        this.#pageElement = pageElement
    }

    addBorder() {
        this.#pageElement.addBorder()
    }

    addBackground() {
        this.#pageElement.addBackground()
    }

    getDOMElement() {
        if(this.checkAccess())
            return this.#pageElement.domElement;
    }

    clone() {
        return new PageElement(this.#pageElement.params);
    }

    checkAccess() {
        console.log("Checking access to real news")
        return true
    }

    build(){
        this.#pageElement.build()
    }
}