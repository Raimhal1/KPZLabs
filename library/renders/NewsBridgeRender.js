import {Render} from "./Render.js";
import {NewsElementBridge} from "../bridges/NewsElementBridge.js";
import {NewsElementAdaptee} from "../elements/NewsElementAdaptee.js";
import {instance} from "../instance.js";

export class NewsBridgeRender extends Render{
	render() {
		// bridge
		let newsElementBridge = new NewsElementBridge(new NewsElementAdaptee({
			title: 'Title of bridge',
			image: 'img/news.jpg',
			text: 'Text of bridge',
			link: '#'
		}))
		newsElementBridge.addBackground();
		newsElementBridge.build();

		instance.append(newsElementBridge.getDOMElement())
	}
}
