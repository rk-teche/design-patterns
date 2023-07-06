interface Task {
    toggleComplete(): unknown;
    getTitle(): string;
    isComplete(): boolean;
    print(): void;
  }
  
  class SingleTask implements Task {
    private completed: boolean = false;
  
    constructor(private title: string) {}
  
    getTitle(): string {
      return this.title;
    }
  
    isComplete(): boolean {
      return this.completed;
    }
  
    toggleComplete(): void {
      this.completed = !this.completed;
    }
  
    print(): void {
      console.log(`- ${this.title} ${this.completed ? '[x]' : '[ ]'}`);
    }
  }
  
  class CompositeTask implements Task {
    private subtasks: Task[] = [];
  
    constructor(private title: string) {}
  
    getTitle(): string {
      return this.title;
    }
  
    isComplete(): boolean {
      return this.subtasks.every((subtask) => subtask.isComplete());
    }
  
    toggleComplete(): void {
      const newCompleteState = !this.isComplete();
      this.subtasks.forEach((subtask) => {
        if (subtask instanceof CompositeTask) {
          subtask.toggleComplete();
        } else {
          subtask.toggleComplete();
        }
      });
    }
  
    add(task: Task): void {
      this.subtasks.push(task);
    }
  
    remove(task: Task): void {
      const index = this.subtasks.indexOf(task);
      if (index !== -1) {
        this.subtasks.splice(index, 1);
      }
    }
  
    print(): void {
      console.log(`* ${this.title} ${this.isComplete() ? '[x]' : '[ ]'}`);
      this.subtasks.forEach((subtask) => {
        subtask.print();
      });
    }
  }
  
  // Usage
  const task1 = new SingleTask('Task 1');
  const task2 = new SingleTask('Task 2');
  const task3 = new SingleTask('Task 3');
  const task4 = new SingleTask('Task 4');
  
  const subtask1 = new SingleTask('Subtask 1');
  const subtask2 = new SingleTask('Subtask 2');
  const subtask3 = new SingleTask('Subtask 3');
  
  const compositeTask1 = new CompositeTask('Composite Task 1');
  compositeTask1.add(task1);
  compositeTask1.add(task2);
  compositeTask1.add(subtask1);
  
  const compositeTask2 = new CompositeTask('Composite Task 2');
  compositeTask2.add(subtask2);
  compositeTask2.add(task3);
  compositeTask2.add(task4);
  
  const rootTask = new CompositeTask('Root Task');
  rootTask.add(compositeTask1);
  rootTask.add(compositeTask2);
  rootTask.add(subtask3);
  
  console.log('Todo List:');
  rootTask.print();
  
  console.log('\nToggle complete Composite Task 1:');
  compositeTask1.toggleComplete();
  rootTask.print();
  