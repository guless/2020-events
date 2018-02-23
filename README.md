安装
---
```sh
npm i gs-events --save-dev
```

文档
---
- [UI Events](https://www.w3.org/TR/uievents/) - DOM 事件系统规范
- [测试用例](https://github.com/guless/events/blob/master/test/)

基本用法
-------
```es6
import { Event, EventDispatcher } from "gs-events";

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
```

