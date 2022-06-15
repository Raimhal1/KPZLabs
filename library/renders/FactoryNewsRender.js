import {Render} from "./Render.js";
import {DefaultNewsRender} from "./DefaultNewsRender.js";
import {NewNewsRender} from "./NewNewsRender.js";

export class FactoryNewsRender extends Render{
	elements = [DefaultNewsRender, NewNewsRender]

	addElement(element){
		this.elements.push(element)
	}

	render() {
		for(let element of this.elements)
			new element().render()

	}
}
