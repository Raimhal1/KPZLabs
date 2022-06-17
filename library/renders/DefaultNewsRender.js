import {Render} from "./Render.js";
import {NewsFactory} from "../factories/NewsFactory.js";
import {instance} from "../instance.js";

export class DefaultNewsRender extends Render{
	render() {
		// abstract factory
		let newsFactory = new NewsFactory({
			title: "Title of news",
			text: "Text of news",
			link: "#",
			image: 'img/news.png'
		})

		let defaultElementNews = newsFactory.createDefaultNews()

		// builder
		defaultElementNews.addBorder();
		defaultElementNews.addBackground();

		// factory method
		defaultElementNews.build();

		instance.append(defaultElementNews.getDOMElement())
	}
}
