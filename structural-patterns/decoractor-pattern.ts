abstract class Beverage 
{
    public abstract cost() : number;
}

abstract class addonDecorator implements Beverage
{
    public abstract cost()  : number;
}

class Expresso implements Beverage
{
    public cost(): number {
        return 2
    }
}

// Addon Decoractor concerte classes
class Caramel implements addonDecorator
{
    private baverage: Beverage;
    constructor(private b: Beverage)
    {
        this.baverage = b;
    }

    public cost(): number {
        return this.baverage.cost() + 2
    }
}

class SoyMilk implements addonDecorator
{
    private baverage: Beverage;
    constructor(private b: Beverage)
    {
        this.baverage = b;
    }

    public cost(): number {
        return this.baverage.cost() + 5
    }
}

const expresso1 = new Expresso()
const expressoCaramel = new Caramel(expresso1)
expressoCaramel.cost() // 4

const expressoCaramelSoyMilk = new SoyMilk(expressoCaramel) // 9