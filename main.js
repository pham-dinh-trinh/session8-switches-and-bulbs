function SwitchButton() {
    this.switch = function () {
        if (this.status) {
            alert('Switch is on => ')
        } else {
            alert('Switch is off => ')
        }
    };
    this.switchOn = function () {
        return this.status = true;
    };
    this.switchOff = function () {
        return this.status = false;
    };
}

function Lamps() {
    this.light = function () {
        if (this.status) {
            alert('Lamp is on.')
        } else {
            alert('Lamp is off.')
        }
    };
    this.turnOn = function (switchbutton) {
        this.status = switchbutton.switchOn();
    };
    this.turnOff = function (switchbutton) {
        this.status = switchbutton.switchOff();
    };
}

let switchbutton = new SwitchButton();
let lamp = new Lamps();

for (let i = 0; i < 5; i++) {
    switchbutton.switchOn();
    switchbutton.switch();
    lamp.turnOn(switchbutton);
    lamp.light();
    switchbutton.switchOff();
    switchbutton.switch();
    lamp.turnOff(switchbutton);
    lamp.light();
}