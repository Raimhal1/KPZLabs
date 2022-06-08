import {NewsElementCreator} from "../creators/NewsElementCreator.js";

export class NewsFactory {
    create(type) {
        switch (type) {
            case 'new':
                return new NewsElementCreator().create({
                    title: '[NEW] Title of news',
                    text: '[NEW]Text of news',
                    link: '#',
                })
            case 'default':
            default:
                return new NewsElementCreator().create({
                    title: 'Title of news',
                    image: 'img/news.png',
                    text: 'Text of news',
                    link: '#'
                })
        }
    }
}