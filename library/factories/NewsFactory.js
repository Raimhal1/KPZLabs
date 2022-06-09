import {NewsElementCreator} from "../creators/NewsElementCreator.js";

export class NewsFactory {
    createNews() {
        return new NewsElementCreator().create({
            title: '[NEW] Title of news',
            text: '[NEW]Text of news',
            link: '#',
            class: 'casualNews'
        })
    }
    createDefaultNews() {
        return new NewsElementCreator().create({
            title: 'Title of news',
            image: 'img/news.png',
            text: 'Text of news',
            link: '#'
        })
    }
}