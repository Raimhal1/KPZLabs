import {NewsFactory} from "./factories/NewsFactory.js";
import {NewsElementAdaptee} from "./elements/NewsElementAdaptee.js";
import {NewsElementBridge} from "./bridges/NewsElementBridge.js";

export class Core {
    // singleton
    static #instance;

    static getInstance() {
        if (!this.#instance)
            this.#instance = new Core();
        return this.#instance;
    }


    render() {
        // abstract factory
        const factory = new NewsFactory()

        let defaultElementNews = factory.createDefaultNews()
        // builder
        defaultElementNews.addBorder();
        // factory method
        defaultElementNews.build();

        let newsElement = factory.createNews()
        newsElement.addBackground();
        newsElement.build();

        // prototype
        let clonedNewsElement = newsElement.clone();
        clonedNewsElement.build();

        // adapter
        let newsElementOtherLibrary = new NewsElementAdaptee({
            title: 'Title of news from other library',
            image: 'img/news.png',
            text: 'Text of news from other library',
            link: '#'
        })
        newsElementOtherLibrary.build();

        // bridge
        let newsElementBridge = new NewsElementBridge(new NewsElementAdaptee({
            title: 'Title of news bridge',
            image: 'img/news.png',
            text: 'Text of news bridge',
            link: '#'
        }))
        newsElementBridge.addBackground();
        newsElementBridge.build();

        const root = document.getElementById('root');

        root.append(
            defaultElementNews.getDOMElement(),
            newsElement.getDOMElement(),
            clonedNewsElement.getDOMElement(),
            newsElementOtherLibrary.getDOMElement(),
            newsElementBridge.getDOMElement(),
        )
    }
}