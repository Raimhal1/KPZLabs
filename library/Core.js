import {FactoryNewsRender} from "./renders/FactoryNewsRender.js";
import {NewsAdapterRender} from "./renders/NewsAdapterRender.js";
import {NewsBridgeRender} from "./renders/NewsBridgeRender.js";
import {Render} from "./renders/Render.js";
import {DecoratorRender} from "./renders/DecoratorRender.js";
import {RenderFacade} from "./facades/RenderFacade.js";
import {FlyweightRender} from "./renders/FlyweightRender.js";
import {ProxyRender} from "./renders/ProxyRender.js";

// composer
export class Core extends Render{
    elements = []

    constructor() {
        super();
        this.elements.push(FactoryNewsRender);
        this.elements.push(NewsAdapterRender);
        this.elements.push(NewsBridgeRender);
        this.elements.push(DecoratorRender);
        this.elements.push(FlyweightRender);
        this.elements.push(ProxyRender)
    }

    // singleton
    static instance;

    static getInstance() {
        if (!Core.instance)
            Core.instance = new Core();
        return Core.instance;
    }

    render() {
        // facade
        new RenderFacade(this.elements).Operation()
    }
}