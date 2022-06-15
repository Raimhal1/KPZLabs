import {Notifier} from "./Notifier.js";

export class BaseDecorator extends Notifier{
    wrappee = null

    constructor(notifier) {
        super();
        this.wrappee = notifier
    }

    send(message) {
        this.wrappee.send(message);
    }
}