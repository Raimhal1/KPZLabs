import {instance} from "../instance.js";
import {NewsFlyweightFactory} from "../factories/NewsFlyweightFactory.js";

export class FlyweightRender {
    render() {
        // flyweight
        let flyweightFactory = new NewsFlyweightFactory()

        let newsElement1 = flyweightFactory.getNews({
            title: 'Title of news',
            image: 'img/news.jpg',
            text: 'Text of other library',
            link: '#',
        })
        let newsElement2 = flyweightFactory.getNews({
            title: 'Title of news',
            image: 'img/news.jpg',
            text: 'Text of other library',
            link: '#',
        })
        let defaultNewsElement1 = flyweightFactory.getDefaultNews({
            title: 'Title of default news with flyweight',
            image: 'img/news.jpg',
            text: 'Text of other library',
            link: '#',
        })
        let defaultNewsElement2 = flyweightFactory.getDefaultNews({
            title: 'Title of default news with flyweight',
            image: 'img/news.jpg',
            text: 'Text of other library',
            link: '#',
            class: 'differentNews'
        })

        // factory method
        newsElement1.build();
        newsElement2.build();
        defaultNewsElement1.build();
        defaultNewsElement2.build();

        instance.append(
            newsElement1.getDOMElement(),
            newsElement2.getDOMElement(),
            defaultNewsElement1.getDOMElement(),
            defaultNewsElement2.getDOMElement(),
        )
    }
}