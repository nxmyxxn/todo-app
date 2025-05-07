import React from 'react';
import axios from "axios";

const TodoItem = ({ item, onStatusChange }) => {
  const handleToggleDone = async () => {
    try {
      await axios.put(`http://localhost:8081/api/todo-items/${item.id}`, {
        isDone: !item.isDone
      });
      onStatusChange();
    } catch (err) {
      console.error("완료 상태 변경 실패", err);
    }
  };

  return (
    <div className="flex items-center gap-2 py-1">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={handleToggleDone}
        className="w-4 h-4 rounded border-gray-300"
      />
      <span className={`flex-1 ${item.isDone ? 'line-through text-gray-500' : ''}`}>
        {item.content}
      </span>
    </div>
  );
};

export default TodoItem;
