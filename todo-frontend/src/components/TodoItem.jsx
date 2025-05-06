import React, { useState } from 'react';
import axios from "axios";

const TodoItem = ({ TodoItem }) => {

  const [isDone, setIsDone] = useState(TodoItem.isDone);
  const [content, setContent] = useState(TodoItem.content);

  const handleToggleDone = async() =>{
    try{
      await axios.put('http://localhost:8080/api/todo-items/${todo.id}')

    } catch(err){
      console.error("완료 상태로 변경 실패", err);
    }
  }

  return (
    <div className="flex items-center justify-between border-b py-2">
      <span>{text}</span>
      <button className="text-sm bg-blue-500 text-white px-2 py-1 rounded">완료</button>
    </div>
  );
};

export default TodoItem;
