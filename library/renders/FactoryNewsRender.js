import {Render} from "./Render.js";
import {DefaultNewsRender} from "./DefaultNewsRender.js";
import {NewNewsRender} from "./NewNewsRender.js";
import {RenderFacade} from "../facades/RenderFacade.js";

export class FactoryNewsRender extends Render{
	elements = [DefaultNewsRender, NewNewsRender]

	addElement(element){
		this.elements.push(element)
	}

	render() {
		// facade
		new RenderFacade(this.elements).Operation()
	}
}
