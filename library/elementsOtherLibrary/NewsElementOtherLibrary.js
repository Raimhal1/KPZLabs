import {DOM} from "../DOM.js";
import {PageElementOtherLibrary} from "./PageElementOtherLibrary.js";

export class NewsElementOtherLibrary extends PageElementOtherLibrary {
    withBorder = false;
    withBackground = false;

    constructor(params) {
        super(params);
    }

    enableBorder() {
        this.withBorder = true;
    }

    enableBackground() {
        this.withBackground = true;
    }

    copy() {
        const newsElement = new PageElementOtherLibrary(this.params)
        newsElement.withBorder = this.withBorder;
        newsElement.withBackground = this.withBackground;
        return newsElement;
    }

    create() {
        const classes = ['news'];
        this.withBorder && classes.push('border');
        this.withBackground && classes.push('background');
        this.dom =  DOM.tag({
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