import {DOM} from "../DOM.js";
import {PageElement} from "./PageElement.js";

export class NewsElement extends PageElement {
    withBorder = false;
    withBackground = false;

    constructor(params) {
        super(params);
    }

    addBorder() {
        this.withBorder = true;
    }

    addBackground() {
        this.withBackground = true;
    }

    clone() {
        const newsElement = new NewsElement(this.params)
        newsElement.withBorder = this.withBorder;
        newsElement.withBackground = this.withBackground;
        return newsElement;
    }

    build() {
        const classes = ['news', this.params.class];
        this.withBorder && classes.push('border');
        this.withBackground && classes.push('background');
        this.domElement = DOM.tag({
                name: 'div',
                class: classes,
                content: [
                    DOM.tag({
                        name: 'div',
                        class: 'photo',
                        content:
                            DOM.tag({
                                name: 'a',
                                attributes: {
                                    href: this.params.link
                                },
                                content: DOM.tag(
                                    {
                                        name: 'img',
                                        attributes: {
                                            href: this.params.image
                                        }
                                    }
                                )
                            })

                    }),
                    DOM.tag({
                        name: 'div',
                        class: 'content',
                        content: [
                            DOM.tag({
                                name: 'div',
                                class: 'title',
                                content: DOM.tag({
                                    name: 'a',
                                    attributes: {
                                        href: this.params.link
                                    },
                                    content: this.params.title
                                })
                            }),
                            DOM.tag({
                                name: 'div',
                                class: 'text',
                                content: this.params.text
                            }),
                        ]
                    })
                ]
            }
        );
    }
}