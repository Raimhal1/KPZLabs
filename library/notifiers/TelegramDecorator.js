import {BaseDecorator} from "./BaseDecorator.js";

export class TelegramDecorator extends BaseDecorator{

    constructor(notifier) {
        super(notifier);
    }

    send(message) {
        super.send(message)
        this.sendTelegramMessage(message)
    }

    sendTelegramMessage(message){
        console.log(`Telegram: ${message}`)
    }


}