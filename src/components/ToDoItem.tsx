import React from 'react';
import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';

interface ToDoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

const StyledListItem = styled(ListItem)({
  padding: '16px',
  marginBottom: '8px',
  borderRadius: '8px',
  transition: 'background-color 0.2s',
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
});

const StyledListItemText = styled(ListItemText)({
  flex: 1,
  fontSize: '1rem',
  fontWeight: 500,
});

const StyledIconButton = styled(IconButton)({
  color: 'inherit',
  padding: '4px',
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#2196f3',
  },
});

export const ToDoItem: React.FC<ToDoItemProps> = ({
  id,
  text,
  completed,
  onToggle,
  onDelete,
  onEdit,
}) => {
  return (
    <StyledListItem>
      <Checkbox
        checked={completed}
        onChange={() => onToggle(id)}
        color="primary"
      />
      <StyledListItemText
        primary={text}
        style={{ 
          textDecoration: completed ? 'line-through' : 'none',
          color: completed ? '#666' : '#333',
        }}
      />
      <ListItemSecondaryAction>
        <StyledIconButton edge="end" onClick={() => onEdit(id)}>
          <EditIcon />
        </StyledIconButton>
        <StyledIconButton edge="end" onClick={() => onDelete(id)}>
          <DeleteIcon />
        </StyledIconButton>
      </ListItemSecondaryAction>
    </StyledListItem>
  );
};
