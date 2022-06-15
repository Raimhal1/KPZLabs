import {BaseDecorator} from "./BaseDecorator.js";

export class FacebookDecorator extends BaseDecorator{

    constructor(notifier) {
        super(notifier);
    }

    send(message) {
        super.send(message)
        this.sendFacebookMessage(message)
    }

    sendFacebookMessage(message){
        console.log(`Facebook: ${message}`)
    }


}