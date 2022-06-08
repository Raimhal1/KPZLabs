import {ElementCreator} from "./ElementCreator.js";
import {NewsElement} from "../elements/NewsElement.js";

export class NewsElementCreator extends ElementCreator {
    create(params) {
        return new NewsElement(params);
    }
}