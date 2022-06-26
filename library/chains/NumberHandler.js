import {AbstractHandler} from "./AbstractHandler.js";

export class NumberHandler extends AbstractHandler {
    Handle(request) {
        if(!isNaN(request)){
            return Math.round(request * 100) / 100
        }
        else{
            return super.Handle(request);
        }
    }
}