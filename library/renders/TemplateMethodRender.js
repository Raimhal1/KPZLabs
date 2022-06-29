import {Render} from "./Render.js";
import {NewsFactory} from "../factories/NewsFactory.js";
import {instance} from "../instance.js";
import {NewsElementCreator} from "../creators/NewsElementCreator.js";

export class TemplateMethodRender extends Render{
	render() {

		const newsCreator = new NewsElementCreator()

		// template method
		const checkedNews1 = newsCreator.checkAndCreate({
			title: "Title of news with template method",
			text: "Text of news",
			link: "#",
			image: 'img/news.png'
		})

		// builder
		checkedNews1.addBorder();

		checkedNews1.build();

		instance.append(checkedNews1.getDOMElement())

		// template method
		const checkedNews2 = newsCreator.checkAndCreate()

		if(!checkedNews2)
			return

		checkedNews2.build()

		instance.append(checkedNews2?.getDOMElement())


	}
}
