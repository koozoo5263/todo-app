import React, { useState } from 'react';
import { Container, List, Typography, Box, ThemeProvider } from '@mui/material';
import { ToDoItem } from './components/ToDoItem';
import { ToDoForm } from './components/ToDoForm';
import { theme } from './theme';

interface ToDo {
  id: string;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: ToDo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id: string) => {
    const todoToEdit = todos.find(todo => todo.id === id);
    if (todoToEdit) {
      const newText = prompt('新しいタスク名を入力してください:', todoToEdit.text);
      if (newText && newText.trim()) {
        setTodos(
          todos.map(todo =>
            todo.id === id ? { ...todo, text: newText } : todo
          )
        );
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box
          sx={{
            my: 4,
            backgroundColor: 'background.paper',
            borderRadius: 8,
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            padding: 3,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            align="center"
            sx={{
              color: 'primary.main',
              fontWeight: 600,
              mb: 3,
            }}
          >
            ToDoリスト
          </Typography>
          <ToDoForm onAdd={addTodo} />
          <List
            sx={{
              bgcolor: 'background.paper',
              borderRadius: 8,
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              p: 0,
            }}
          >
            {todos.map(todo => (
              <ToDoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
            ))}
          </List>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
