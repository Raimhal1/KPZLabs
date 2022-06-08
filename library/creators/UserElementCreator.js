import {ElementCreator} from "./ElementCreator.js";
import {UserElement} from "../elements/UserElement.js";

export class UserElementCreator extends ElementCreator {
    create(params) {
        return new UserElement(params);
    }
}