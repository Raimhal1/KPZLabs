import {Render} from "./Render.js";
import {NewsElementAdaptee} from "../elements/NewsElementAdaptee.js";
import {instance} from "../instance.js";

export class NewsAdapterRender extends Render{
	render() {
		// adapter
		let otherNewsElement = new NewsElementAdaptee({
			title: 'Other library',
			image: 'img/news.jpg',
			text: 'Text of other library',
			link: '#',
		})
		otherNewsElement.build();

		instance.append(otherNewsElement.getDOMElement())
	}
}
