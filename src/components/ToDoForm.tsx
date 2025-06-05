import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ToDoFormProps {
  onAdd: (text: string) => void;
}

const StyledBox = styled(Box)({
  display: 'flex',
  gap: '8px',
  marginBottom: '16px',
  backgroundColor: 'white',
  borderRadius: '8px',
  padding: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
  },
});

export const ToDoForm: React.FC<ToDoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledBox>
        <StyledTextField
          fullWidth
          variant="outlined"
          placeholder="新しいタスクを追加"
          value={text}
          onChange={(e) => setText(e.target.value)}
          size="small"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="small"
          sx={{
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 500,
          }}
        >
          追加
        </Button>
      </StyledBox>
    </form>
  );
};
