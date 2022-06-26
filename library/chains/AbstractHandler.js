import {IHandler} from "./IHandler.js";

export class AbstractHandler extends IHandler{
    _nextHandler;

    SetNext(handler){
        this._nextHandler = handler
        return handler
    }

    Handle(request) {
        if(!!this._nextHandler)
            return this._nextHandler.Handle(request)
        else
            return request
    }
}