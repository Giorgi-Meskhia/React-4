import React from 'react';

const TaskList = ({ todos, completed, completeTask, returnToTodo, deleteTask }) => {
  return (
    <div style={styles.columns}>
      <div style={styles.column}>
        <h3>შესასრულებელი</h3>
        {todos.map((t, i) => (
          <div key={i} style={styles.task}>
            <span>{t}</span>
            <button onClick={() => completeTask(i)} style={styles.button}>დასრულება</button>
          </div>
        ))}
      </div>

      <div style={styles.column}>
        <h3>შესრულებული</h3>
        {completed.map((t, i) => (
          <div key={i} style={styles.task}>
            <span>{t}</span>
            <button onClick={() => returnToTodo(i)} style={styles.button}>დაბრუნება</button>
            <button onClick={() => deleteTask(i)} style={{ ...styles.button, backgroundColor: '#e74c3c' }}>წაშლა</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  columns: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 40,
  },
  column: {
    width: '45%',
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 8,
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  task: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    marginLeft: 10,
    padding: '5px 10px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
  },
};

export default TaskList;
