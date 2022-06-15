import {BaseDecorator} from "./BaseDecorator.js";

export class SMSDecorator extends BaseDecorator{

    constructor(notifier) {
        super(notifier);
    }

    send(message) {
        super.send(message)
        this.sendSMS(message)
    }

    sendSMS(message){
        console.log(`SMS: ${message}`)
    }


}