abstract class BaseClass {
    protected abstract doSomething(): void;
  
    protected nonOverridableMethod(): void {
      console.log("This method cannot be changed by subclasses");
    }
  }
  
  class SubClass extends BaseClass {
    protected doSomething(): void {
      console.log("SubClass is doing something");
    }
  
    protected nonOverridableMethod(): void {
      
    }
  
    // Attempting to override the nonOverridableMethod will result in a TypeScript compilation error
  }
  
  // Usage
  const instance = new SubClass();
  instance.doSomething(); // SubClass is doing something
  instance.nonOverridableMethod(); // This method cannot be changed by subclasses
  