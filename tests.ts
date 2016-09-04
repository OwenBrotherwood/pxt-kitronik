// tests go here; 
// this will not be compiled when this package is used as a library

// back and forth
kitronik.motorCommand(Motor.Motor1And2, MotorCommand.Forward);
basic.pause(2000);
kitronik.motorCommand(Motor.Motor1And2, MotorCommand.Reverse);
basic.pause(2000);

// merry go round
kitronik.motorCommand(Motor.Motor1, MotorCommand.Forward);
kitronik.motorCommand(Motor.Motor2, MotorCommand.Reverse);
basic.pause(2000);
kitronik.motorCommand(Motor.Motor1And2, MotorCommand.Brake);    
