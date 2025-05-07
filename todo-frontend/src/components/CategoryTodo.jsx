import React, {useEffect, useState, useCallback} from 'react';
import axios from "axios";
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const CategoryTodo = ({categoryId, onTodoAdded, selectedDate}) => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const fetchTodoItems = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8081/api/categories/${categoryId}/todo-items`);
      setTodos(response.data);
    } catch (error) {
      console.error("할 일 목록 불러오기 실패", error);
    }
  }, [categoryId]);

  const handleAddTodo = async() => {
    if(!newTodo.trim()) return;
  
    try{
      await axios.post(`http://localhost:8081/api/categories/${categoryId}/todo-items`,{
        content: newTodo,
        categoryId: categoryId,
        dueDate: selectedDate ? selectedDate.toISOString().split('T')[0] : null
      });
      setNewTodo("");
      onTodoAdded();
    } catch (err){
      console.error("fail to add todo-categorytodo.jsx", err);
    }
  };

  useEffect(() => {
    fetchTodoItems();
  }, [categoryId, fetchTodoItems, selectedDate]);

  const filteredTodos = selectedDate 
    ? todos.filter(todo => todo.dueDate === selectedDate.toISOString().split('T')[0])
    : todos;

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <ul className="mb-2">
        {filteredTodos.map((item) => (
          <TodoItem 
            key={item.id} 
            item={item} 
            onStatusChange={fetchTodoItems}
          />
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

CategoryTodo.propTypes = {
  categoryId: PropTypes.number.isRequired,
  onTodoAdded: PropTypes.func.isRequired,
  selectedDate: PropTypes.instanceOf(Date)
};

CategoryTodo.defaultProps = {
  selectedDate: null
};

export default CategoryTodo;
