interface IObserable
{
    add(item: IObserver);
    remove(item: IObserver);
    notify();
}

interface IObserver
{
    update()
}

class ConcreteObserable implements IObserable {

    private observers : IObserver[] = []
    constructor()
    {

    }

    add(item: IObserver) {
        this.observers.push(item)
    }

    remove(item: IObserver) {
        
    }

    notify() {
        this.observers.forEach((item: IObserver) => {
            item.update()
        })
    }

    getTemprature(){
        return "32 degree celcious"
    }
}

class ConcreteObserver implements IObserver {

    private concreteObserable : ConcreteObserable;

    constructor(private _concreteObserable : ConcreteObserable)
    {
        this.concreteObserable = _concreteObserable
        this.concreteObserable.add(this)
    }

    update() {
        this.concreteObserable.getTemprature()
        // add your logic
    }
}