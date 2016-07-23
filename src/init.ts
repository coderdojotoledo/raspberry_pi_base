let gpio = require("pi-gpio");

console.log("BUILT");
class LED {
    private pin = 16;

    constructor() {
        gpio.open(16, "output");
    }

    public on() {
        gpio.open(16, "output", () => {
            gpio.write(16, 1);
            console.log("ON");
            gpio.close(16);
        });
    }

    public off() {
        gpio.open(16, "output", () => {
            gpio.write(16, 0);
            console.log("OFF");
            gpio.close(16);
        });
    }
}

let l = new LED();
function init() {
    console.log("start...");
    l.on();
    setTimeout(() => {
        init();
        l.off();
    }, 2000);
}

init();
