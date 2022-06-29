import {DOM} from "../DOM.js";
import {PageElement} from "./PageElement.js";

export class UserElement extends PageElement {
    constructor(params) {
        super(params);
    }

    accept(visitor) {
        visitor.visitUserElement(this)
    }

    build() {
        this.domElement = DOM.tag({
            name: 'div',
            class: 'user',
            content: [
                DOM.tag({
                    name: 'div',
                    class: 'photo',
                    content: DOM.tag({
                            name: 'img',
                            attributes: {
                                href: this.params.image
                            }
                        }
                    )
                }),
                DOM.tag({
                    name: 'div',
                    class: 'content',
                    content:
                        DOM.tag({
                            name: 'div',
                            class: 'title',
                            content: `${this.params.firstName} ${this.params.lastName}`
                        })

                })
            ]
        });
    }
}