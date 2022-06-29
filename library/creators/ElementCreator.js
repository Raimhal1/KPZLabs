import {ObjectComparator} from "../comparators/ObjectComparator.js";

export class ElementCreator {
    create(params) {

    }

    // template method
    checkAndCreate(params = {}){
        if(!ObjectComparator(params, {}))
            return this.create(params)
        else{
            console.log("params was incorrect!")
        }
    }
}