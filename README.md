# Kitronic package

A set of functions to work with Kitronik kits

## Motor Driver Board

![](https://www.kitronik.co.uk/media/catalog/product/cache/1/image/308x308/9df78eab33525d08d6e5fb8d27136e95/5/6/5620_large_motor_driver_board_for_the_bbc_microbit_v2_5.jpg)

The Motor driver board allows to operator 2 motors with higher current.

    * datasheet https://www.kitronik.co.uk/5620-motor-driver-board-for-the-bbc-microbit-v2.html

* Move both motors forward
```blocks
kitronik.motorCommand(Motor.Motor1And2, MotorCommand.Forward);
```

* Turn around
```blocks
kitronik.motorCommand(Motor.Motor1, MotorCommand.Forward);
kitronik.motorCommand(Motor.Motor1, MotorCommand.Reverse);
```

## Supported targets

* for PXT/microbit

## License

MIT
