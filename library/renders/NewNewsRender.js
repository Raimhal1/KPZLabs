import {Render} from "./Render.js";
import {NewsFactory} from "../factories/NewsFactory.js";
import {instance} from "../instance.js";
import {CreateNewNewsCommand} from "../commands/CreateNewNewsCommand.js";

export class NewNewsRender extends Render{
	render() {
		let newsFactory = new NewsFactory({
			title: "[NEW] Title of news",
			text: "[NEW] Text of news",
			link: "#",
			image: 'img/news.png'
		})
		let newElementNews1 = newsFactory.createNews()
		newElementNews1.build();

		// prototype
		let newElementNews2 = newElementNews1.clone();
		newElementNews2.build();

		// command
		const createNewNewsCommand = new CreateNewNewsCommand(newsFactory, instance)

		createNewNewsCommand.execute()
		createNewNewsCommand.execute()
		createNewNewsCommand.execute()

		instance.append(
			newElementNews1.getDOMElement(),
			newElementNews2.getDOMElement()
		)
	}
}
