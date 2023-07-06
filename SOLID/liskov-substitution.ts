class T {

}

// type S is a subtype of T and It is actually a T.
// If T can do something that means S can also does it
// So if any subtype doesn't follow parent property then we are breaking the Liskov's Substitution principle
class S extends T {

}

/**
 * Suppose we have a shape hierarchy consisting of a `base` Shape class and two derived classes, Rectangle and Circle. 
 * The LSP states that objects of derived classes should be able to substitute objects of the base class without altering the correctness of the program.
*/

/**
 * Base Class
 */
class Shape {
    protected color: string;
  
    constructor(color: string) {
      this.color = color;
    }
  
    getColor(): string {
      return this.color;
    }
  
    getArea(): number {
      return 0;
    }
  }
  
  /**
   * Derived Class : Rectangle
   */
  class Rectangle extends Shape {
    private width: number;
    private height: number;
  
    constructor(color: string, width: number, height: number) {
      super(color);
      this.width = width;
      this.height = height;
    }
  
    getArea(): number {
      return this.width * this.height;
    }
  }
  
   /**
   * Derived Class : Circle
   */
  class Circle extends Shape {
    private radius: number;
  
    constructor(color: string, radius: number) {
      super(color);
      this.radius = radius;
    }
  
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  

  function printShapeArea(shape: Shape): void {
    console.log(`Area of ${shape.getColor()} shape: ${shape.getArea()}`);
  }
  
  // Usage
  const rectangle = new Rectangle("blue", 5, 3);
  const circle = new Circle("red", 4);
  
  printShapeArea(rectangle); // Area of blue shape: 15
  printShapeArea(circle); // Area of red shape: 50.26548245743669
  
  /**
   * The printShapeArea function demonstrates the LSP by accepting an object of type Shape as a parameter and calling its getArea method. 
   * This function can work correctly with any object of the Shape hierarchy, whether it's a Rectangle or Circle. 
   * The behavior is consistent because the derived classes adhere to the contract defined by the base Shape class, and
   *  substituting objects of derived classes does not affect the correctness of the program.


   */