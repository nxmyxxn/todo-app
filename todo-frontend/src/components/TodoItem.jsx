import React from 'react';

const TodoItem = ({ text }) => {
  return (
    <div className="flex items-center justify-between border-b py-2">
      <span>{text}</span>
      <button className="text-sm bg-blue-500 text-white px-2 py-1 rounded">완료</button>
    </div>
  );
};

export default TodoItem;
