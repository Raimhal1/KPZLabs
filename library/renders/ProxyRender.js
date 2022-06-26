import {NewsProxy} from "../proxies/NewsProxy.js";
import {NewsFactory} from "../factories/NewsFactory.js";
import {instance} from "../instance.js";
import {NumberHandler} from "../chains/NumberHandler.js";
import {AbstractHandler} from "../chains/AbstractHandler.js";
import {DateTimeHandler} from "../chains/DateTimeHandler.js";


export class ProxyRender {
    render() {


        const numberHandler = new NumberHandler()
        const dateTimeHandler = new DateTimeHandler()

        // chain of responsibility
        numberHandler.SetNext(dateTimeHandler)


        // abstract factory
        let newsFactory = new NewsFactory({
            title: "Title of news with proxy and chain of responsibility",
            text: numberHandler.Handle("2022-12-1").toString() + " / " + numberHandler.Handle("20.1234534511").toString(),
            link: "#",
            image: 'img/news.png'
        })

        let newsElement = newsFactory.createNews()

        // builder
        newsElement.addBorder()

        // proxy
        let proxy = new NewsProxy(newsElement)
        proxy.addBackground()
        proxy.build()

        instance.append(proxy.getDOMElement())
    }
}