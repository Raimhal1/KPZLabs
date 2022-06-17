import {NewsProxy} from "../proxies/NewsProxy.js";
import {NewsFactory} from "../factories/NewsFactory.js";
import {instance} from "../instance.js";


export class ProxyRender {
    render() {
        // abstract factory
        let newsFactory = new NewsFactory({
            title: "Title of news with proxy",
            text: "Text of news",
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