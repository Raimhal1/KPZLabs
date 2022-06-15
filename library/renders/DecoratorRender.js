import {Render} from "./Render.js";
import {Notifier} from "../notifiers/Notifier.js";
import {SMSDecorator} from "../notifiers/SMSDecorator.js";
import {FacebookDecorator} from "../notifiers/FacebookDecorator.js";
import {TelegramDecorator} from "../notifiers/TelegramDecorator.js";

export class DecoratorRender extends Render{
    render() {
        // decorator
        let notifier = new Notifier()

        // SMS
        notifier = new SMSDecorator(notifier)
        notifier.send("message")

        // SMS + Facebook
        notifier = new FacebookDecorator(notifier)
        notifier.send("message to SMM and Facebook")

        // SMS + Facebook + Telegram
        notifier = new TelegramDecorator(notifier)
        notifier.send("message to all social media")
    }
}
