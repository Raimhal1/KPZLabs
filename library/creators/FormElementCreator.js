import {ElementCreator} from "./ElementCreator.js";
import {FormElement} from "../elements/FormElement.js";

export class FormElementCreator extends ElementCreator {
    create(params) {
        return new FormElement(params);
    }
}