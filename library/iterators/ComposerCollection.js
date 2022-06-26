import {ComposerIterator} from "./ComposerIterator.js";

export class ComposerCollection {
    _collection = []
    _direction = false

    constructor(collection) {
        this._collection = collection
    }

    reverseDirection(){
        this._direction = !this._direction
    }

    getItems(){
        return this._collection
    }

    addItem(item){
        this._collection.push(item)
    }

    getEnumerator(){
        return new ComposerIterator(this, this._direction)
    }

}