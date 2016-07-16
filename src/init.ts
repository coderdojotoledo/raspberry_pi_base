let gpio = require("pi-gpio");

console.log("BUILT");
class LED {
    private pin = 16;

    constructor() {
        gpio.open(16, "output");
    }

    public on() {
        gpio.write(16, 1);
        console.log("ON");
    }

    public off() {
        gpio.write(16, 0);
        console.log("OFF");
    }
}

function init() {
    console.log("start...");
    let l = new LED();
    l.on();
    setTimeout(() => l.off(), 2000);
    init();
}

init();
