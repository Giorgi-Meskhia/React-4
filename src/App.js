import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const completeTask = (index) => {
    const taskToMove = todos[index];
    setCompleted([...completed, taskToMove]);
    setTodos(todos.filter((_, i) => i !== index));
  };

  const deleteTask = (index) => {
    setCompleted(completed.filter((_, i) => i !== index));
  };

  const returnToTodo = (index) => {
    const taskToMove = completed[index];
    setTodos([...todos, taskToMove]);
    setCompleted(completed.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h2>To-Do List</h2>
      <TaskInput task={task} setTask={setTask} addTask={addTask} />
      <TaskList
        todos={todos}
        completed={completed}
        completeTask={completeTask}
        returnToTodo={returnToTodo}
        deleteTask={deleteTask}
      />
    </div>
  );
};

const styles = {
  container: {
    padding: 30,
    fontFamily: 'sans-serif',
  },
};

export default App;

