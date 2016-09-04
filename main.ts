enum Motor {
    //% block=1
    Motor1 = 0x01,
    //% block=2
    Motor2 = 0x10,
    //% block="1&2"
    Motor1And2 = 0x11 
}

enum MotorCommand {
    //% block="coast"
    Coast,
    //% block="drive forward"
    Forward,
    //% block="drive in reverse"
    Reverse,
    //% block="brake"
    Brake
}

/**
 * A set of functions to work with Kitronik kits
 */
//% color=#00A654 weigth=1
namespace kitronik {
    /**
     * Sends a command to one or both motors on the board.
     * help=https://www.kitronik.co.uk/pdf/5620-Motor-Driver-Board-V1.0.pdf
     * @param motor name of the motor(s)
     * @param command action to send to the motor
     */
    //% blockId=kitronik_motor_drive
    //% block="motor %motor=kitronik_motor_id|command to %command"
    //% weight=80
    export function motorCommand(motor: number, command: MotorCommand) {
        if (motor & <number>Motor.Motor1)
            pinCommand(DigitalPin.P8, DigitalPin.P12, command);
        if (motor & <number>Motor.Motor2)
            pinCommand(DigitalPin.P0, DigitalPin.P16, command);
    }

    function pinCommand(p0: DigitalPin, p1: DigitalPin, cmd: MotorCommand) {
        let p0v = 0;
        let p1v = 0;
        switch (cmd) {
            case MotorCommand.Forward: p0v = 1; break;
            case MotorCommand.Reverse: p1v = 1; break;
            case MotorCommand.Brake: p0v = 1; p1v = 1; break;
            default: 
            //case MotorCommand.Coast:
        }
        pins.digitalWritePin(p0, p0v);
        pins.digitalWritePin(p1, p1v);
    }

    /**
     * Converts the motor command name into a number.
     * @param motor name of the motor
     */
    //% blockId=kitronik_motor_id block="%motor"
    //% shim=TD_ID    
    export function motorId(motor: Motor): number {
        return motor;        
    }
}
