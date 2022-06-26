import {Command} from "./Command.js";

export class CreateNewNewsCommand extends Command {
    _factory

    constructor(factory, receiver){
        super(receiver)
        this._factory = factory
    }

    execute(){
        const news = this._factory.createNews()
        news.build()
        this.receiver.append(news.getDOMElement())
    }
}