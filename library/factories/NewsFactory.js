import {NewsElementCreator} from "../creators/NewsElementCreator.js";
import {Factory} from "./Factory.js";


export class NewsFactory extends Factory {
    props = {}

    constructor(props) {
        super();
        this.props = props
    }


    createNews() {
        return new NewsElementCreator().create({
            ...this.props,
            class: 'casualNews'
        })
    }
    createDefaultNews() {
        return new NewsElementCreator().create({
            ...this.props
        })
    }
}