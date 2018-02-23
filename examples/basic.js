import { Event, EventDispatcher } from "..";

class Node extends EventDispatcher {
    constructor() {
        super();
        this.addEventListener("custom", this.handler);
    }
    
    handler( evt ) {
        console.log("scope:", this);
        console.log("event:", evt);
    }
}

let node = new Node();
node.dispatchEvent(new Event("custom", false, true));