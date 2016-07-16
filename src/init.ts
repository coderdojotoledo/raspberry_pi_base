let gpio = require("pi-gpio");

console.log("STARTING");
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
    let l = new LED();

    setTimeout(() => l.on, 2000);
    setTimeout(() => l.off(), 4000);
    init();
}

init();
