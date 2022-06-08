import {DOM} from "../DOM.js";
import {PageElement} from "./PageElement.js";

export class FormElement extends PageElement {
    constructor(params) {
        super(params);
    }

    build() {
        this.domElement =
            DOM.tag(
                {
                    name: 'form',
                    attributes: {
                        action: '',
                        method: 'post'
                    },
                    content: [
                        DOM.tag({
                                name: 'div',
                                content: DOM.tag(
                                    {
                                        name: 'input',
                                        attributes: {
                                            type: 'text',
                                            name: 'login'
                                        }
                                    }
                                )
                            }
                        ),
                        DOM.tag(
                            {
                                name: 'div',
                                content: DOM.tag({
                                        name: 'input',
                                        attributes: {
                                            type: 'password',
                                            name: 'password'
                                        }
                                    }
                                )
                            }),
                        DOM.tag({
                            name: 'div',
                            content: DOM.tag(
                                {
                                    name: 'input',
                                    attributes: {
                                        type: 'submit',
                                        value: 'Send'
                                    }
                                }
                            )
                        })
                    ]
                }
            )
    }
}