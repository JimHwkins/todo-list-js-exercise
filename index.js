const newTask = (title, description) => {
  const task = {
    title: title,
    description: description,
    completed: false,

    logTaskState: function () {
      console.log(
        `${this.title} has${task.completed ? " " : " not "}been completed`
      );
    },

    completeTask: function () {
      this.completed = true;
    },
  };
  return task;
};

// DRIVER CODE BELOW

const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logTaskState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logTaskState(); // Clean Cat Litter has been completed
