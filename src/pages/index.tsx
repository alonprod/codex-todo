import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(localStorage.getItem('darkMode') === 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setText('');
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark : ''}`}>
      <Head>
        <title>Codex Todo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Todo List</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={styles.toggleDark}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <div className={styles.inputRow}>
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Add a task"
            className={styles.input}
          />
          <button onClick={addTodo} className={styles.addBtn}>Add</button>
        </div>
        <ul className={styles.list}>
          {todos.map(todo => (
            <li key={todo.id} className={styles.item}>
              <label className={todo.completed ? styles.completed : ''}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                {todo.text}
              </label>
              <button onClick={() => deleteTodo(todo.id)} className={styles.delBtn}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
