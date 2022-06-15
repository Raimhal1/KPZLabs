import {Render} from "./Render.js";
import {NewsFactory} from "../factories/NewsFactory.js";
import {instance} from "../instance.js";

export class NewNewsRender extends Render{
	render() {
		let newsFactory = new NewsFactory()
		let newElementNews1 = newsFactory.createNews()
		newElementNews1.build();

		// prototype
		let newElementNews2 = newElementNews1.clone();
		newElementNews2.build();

		instance.append(
			newElementNews1.getDOMElement(),
			newElementNews2.getDOMElement()
		)
	}
}
