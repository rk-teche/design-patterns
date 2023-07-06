// Receiver: Light
class Light {
    turnOn(): void {
      console.log('Light is on.');
    }
  
    turnOff(): void {
      console.log('Light is off.');
    }
  }
  
  // Command Interface
  interface Command {
    execute(): void;
  }
  
  // Concrete Command: TurnOnCommand
  class TurnOnCommand implements Command {
    private light: Light;
  
    constructor(light: Light) {
      this.light = light;
    }
  
    execute(): void {
      this.light.turnOn();
    }
  }
  
  // Concrete Command: TurnOffCommand
  class TurnOffCommand implements Command {
    private light: Light;
  
    constructor(light: Light) {
      this.light = light;
    }
  
    execute(): void {
      this.light.turnOff();
    }
  }
  
  // Invoker: Remote
  class Remote {
    private command: Command;
  
    setCommand(command: Command): void {
      this.command = command;
    }
  
    pressButton(): void {
      this.command.execute();
    }
  }
  
  // Usage Example
  const light = new Light();
  const turnOnCommand = new TurnOnCommand(light);
  const turnOffCommand = new TurnOffCommand(light);
  
  const remote = new Remote();
  
  // Turning the light on
  remote.setCommand(turnOnCommand);
  remote.pressButton(); // Output: Light is on.
  
  // Turning the light off
  remote.setCommand(turnOffCommand);
  remote.pressButton(); // Output: Light is off.
  