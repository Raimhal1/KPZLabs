import {instance} from "../instance.js";
import {NewsFlyweightFactory} from "../factories/NewsFlyweightFactory.js";
import {Visitor} from "../visitors/Visitor.js";

export class FlyweightRender {
    render() {
        // flyweight
        const flyweightFactory = new NewsFlyweightFactory()

        // visitor
        const visitor = new Visitor()


        let newsElement1 = flyweightFactory.getNews({
            title: 'Title of news',
            image: 'img/news.jpg',
            text: 'Text of news',
            link: '#',
        })
        let newsElement2 = flyweightFactory.getNews({
            title: 'Title of news from flyweight',
            image: 'img/news.jpg',
            text: 'Text of news',
            link: '#',
        })
        let defaultNewsElement1 = flyweightFactory.getDefaultNews({
            title: 'Title of default news with flyweight',
            image: 'img/news.jpg',
            text: 'Text of news',
            link: '#',
        })
        let defaultNewsElement2 = flyweightFactory.getDefaultNews({
            title: 'Title of default news with flyweight 2',
            image: 'img/news.jpg',
            text: 'Text of news',
            link: '#',
            class: 'differentNews'
        })

        // visitor
        newsElement1.accept(visitor);
        newsElement2.accept(visitor);
        defaultNewsElement1.accept(visitor);
        defaultNewsElement2.accept(visitor);

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