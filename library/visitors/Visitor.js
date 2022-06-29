import {AbstractVisitor} from "./AbstractVisitor.js";

export class Visitor extends AbstractVisitor {

    visitFormElement(formElement){
        console.log("visit form element")
    }

    visitNewsElement(newsElement){
        console.log(`visit news element with title: ${newsElement.params.title}`)
    }

    visitUserElement(userElement){
        console.log("visit user element")
    }
}