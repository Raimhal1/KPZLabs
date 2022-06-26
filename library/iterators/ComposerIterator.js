import {Iterator} from "./Iterator.js";

export class ComposerIterator extends Iterator {
    _collection

    _position = -1
    _reverse = false

    constructor(collection, reverse) {
        super()
        this._collection = collection
        this._reverse = reverse

        if(reverse)
            this._position = collection.getItems().length
    }

    current() {
        return this._collection.getItems()[this._position]
    }

    currentKey() {
        return this._position
    }

    moveNext() {
        const newPosition = this._position + (this._reverse ? -1 : 1)
        if(newPosition >= 0 && newPosition < this._collection.getItems().length){
            this._position = newPosition
            return true
        }
        else{
            return false
        }
    }

    reset() {
        this._position = this._reverse ? this._collection.getItems().length : 0
    }
}