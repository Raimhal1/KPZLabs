import {FactoryNewsRender} from "./renders/FactoryNewsRender.js";
import {NewsAdapterRender} from "./renders/NewsAdapterRender.js";
import {NewsBridgeRender} from "./renders/NewsBridgeRender.js";
import {Render} from "./renders/Render.js";
import {DecoratorRender} from "./renders/DecoratorRender.js";

// composer
export class Core extends Render{
    elements = []

    constructor() {
        super();
        this.elements.push(FactoryNewsRender);
        this.elements.push(NewsAdapterRender);
        this.elements.push(NewsBridgeRender);
        this.elements.push(DecoratorRender);
    }

    // singleton
    static instance;

    static getInstance() {
        if (!Core.instance)
            Core.instance = new Core();
        return Core.instance;
    }

    render() {
        for(let element of this.elements)
            new element().render()
    }
}