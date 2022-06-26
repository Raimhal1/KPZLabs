import {ObjectComparator} from "../comparators/ObjectComparator.js";
import {FlyweightFactory} from "./FlyweightFactory.js";
import {NewsElementCreator} from "../creators/NewsElementCreator.js";

export class NewsFlyweightFactory extends FlyweightFactory {
    #flyweights = []

    getNews(props) {
        let news = this.#flyweights.find(x => ObjectComparator(x.params, props))

        if(!news){
            news = new NewsElementCreator().create({
                ...props,
                class: 'casualNews'
            })
            this.#flyweights.push(news)
        }

        return news;
    }

    getDefaultNews(props) {
        let news = this.#flyweights.find(x => ObjectComparator(x.params, props))

        if(!news){
            news = new NewsElementCreator().create({
                ...props
            })
            this.#flyweights.push(news)
        }

        return news;
    }
}