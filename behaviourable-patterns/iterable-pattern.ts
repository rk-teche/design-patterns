interface Iterable<T> {
  [Symbol.iterator](): Iterator<T>;
}

interface IteratorResults<T> {
  value: T;
  done: boolean;
}

interface Iterator<T> {
  next(value?: any): IteratorResults<T>;
}


class ComplexDataStructure<T> implements Iterable<T> {
  private data: T[];

  constructor() {
    this.data = [];
  }

  public add(item: T): void {
    this.data.push(item);
  }

  // Iterator implementation
  [Symbol.iterator](): Iterator<T> {
    let index = 0;

    return {
      next: (): IteratorResults<T> => {
        if (index < this.data.length) {
          const value = this.data[index];
          index++;
          return { value, done: false };
        } else {
          return { value: null as any, done: true };
        }
      }
    };
  }
}

// Usage
const dataStructure = new ComplexDataStructure<number>();
dataStructure.add(1);
dataStructure.add(2);
dataStructure.add(3);

for (const item of dataStructure) {
  console.log(item);
}
