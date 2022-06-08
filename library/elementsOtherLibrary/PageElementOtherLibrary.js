export class PageElementOtherLibrary {
    dom;
    params;

    constructor(params) {
        this.params = params;
    }

    getDOM() {
        return this.dom;
    }

    enableBorder(){

    }

    enableBackground(){

    }

    create(){

    }

    copy() {
        return new PageElementOtherLibrary(this.params);
    }
}