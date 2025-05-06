import React, {useEffect, useState} from 'react';
import axios from "axios";

const CategoryTodo = ({categoryId, todoItems, onTodoAdded}) => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  console.log("넘어온 categoryId:", categoryId);

  //할일목록 불러오기
  const fetchTodoItems = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/categories/${categoryId}/todo-items`);
      console.log("서버 응답:", response.data);
      setTodos(response.data);
    } catch (error) {
      console.error("할 일 목록 불러오기 실패", error);
    }
  };

  //할일추가
  const handleAddTodo = async() => {
    if(!newTodo.trim()) return;
  
  try{
    await axios.post(`http://localhost:8080/api/categories/${categoryId}/todo-items`,{
      content: newTodo,
  });
  setNewTodo("");
  onTodoAdded();
} catch (err){
  console.error("fail to add todo-categorytodo.jsx", err);
}
};

useEffect(() => {
  console.log("useEffect 실행됨 ✅", categoryId);
  fetchTodoItems();
}, [categoryId]);

return (
  <div className="bg-white p-4 rounded-lg shadow">
    <ul className="mb-2">
      {todos.map((item) => (
        <li key={item.id} className="py-1">{item.content}</li>
      ))}
    </ul>

    <div className="flex gap-2">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="할 일 입력"
        className="border px-2 py-1 rounded w-full"
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        추가
      </button>
    </div>
  </div>
);
};

export default CategoryTodo;
