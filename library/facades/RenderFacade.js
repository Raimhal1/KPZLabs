import {Facade} from "./Facade.js";

export class RenderFacade extends Facade {
    subsystems = []

    constructor(subsystems){
        super();
        this.subsystems = subsystems
    }

    Operation(){
        for(let subsystem of this.subsystems)
            new subsystem().render()
    }
}