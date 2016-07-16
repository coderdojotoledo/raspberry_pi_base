let gpio = require("pi-gpio");

class LED {
    private pin = 16;

    constructor() {
        gpio.open(16, "output");
    }

    public on() {
        gpio.write(16, 1);
    }

    public off() {
        gpio.close(16);
    }
}

let l = new LED();

setTimeout(() => l.on, 2000);
setTimeout(() => l.off(), 4000);
