let gpio = require("pi-gpio");

console.log("BUILT");
class LED {
    constructor(private pin = 16) {
        gpio.open(16, "output");
    }

    public on() {
        gpio.write(16, 1, () => {
            console.log("ON");
        });
    }

    public off() {
        gpio.write(16, 0, () => {
            console.log("OFF");
        });
    }
}

let light = new LED();

setInterval(() => {
    light.on();
    setTimeout(() => {
        light.off();
    }, 2000);
}, 4000);

process.on('SIGINT', function() {
    console.log("Caught interrupt signal");
    gpio.close(16, () => {
        process.exit();
    });
});
