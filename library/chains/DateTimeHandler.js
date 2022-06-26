import {AbstractHandler} from "./AbstractHandler.js";

export class DateTimeHandler extends AbstractHandler {
    Handle(request) {
        if(request.match(/^(\d+).(\d{2}).(\d+)/) && !!Date.parse(request)){
            return new Date(request).toLocaleDateString()
        }
        else{
            return super.Handle(request);
        }
    }
}