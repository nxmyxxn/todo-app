import React from 'react';
import TodoItem from './TodoItem';

const CategoryTodo = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">📝 Today's Tasks</h2>
      <TodoItem text="과제 제출하기" />
      <TodoItem text="운동 30분 하기" />
    </div>
  );
};

export default CategoryTodo;
