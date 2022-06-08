import {NewsFactory} from "./factories/NewsFactory.js";
import {NewsElementAdaptee} from "./elements/NewsElementAdaptee.js";
import {NewsElementBridge} from "./bridges/NewsElementBridge.js";

export class Core {
    // singleton
    static #instance;

    static getInstance() {
        if (!this.#instance) {
            this.#instance = new Core();
        }
        return this.#instance;
    }

    // composer
    render() {
        // abstract factory
        let defaultElementNews = new NewsFactory().create('default')
        // builder
        defaultElementNews.addBorder();
        // factory method
        defaultElementNews.build();

        let newElementNews1 = new NewsFactory().create('new')
        newElementNews1.addBackground();
        newElementNews1.build();

        // prototype
        let newElementNews2 = newElementNews1.clone();
        newElementNews2.build();

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
        newsElementBridge.build();

        const root = document.getElementById('root');
        root.append(
            defaultElementNews.getDOMElement(),
            newElementNews1.getDOMElement(),
            newElementNews2.getDOMElement(),
            newsElementOtherLibrary.getDOMElement(),
            newsElementBridge.getDOMElement(),
        )
    }
}