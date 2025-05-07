import React from "react";
import CategoryTodo from "../components/CategoryTodo";

function CategoryList({ categories, selectedDate }) {
  const handleTodoAdded = () => {
    // 할 일이 추가되면 카테고리 목록을 새로고침
    window.location.reload();
  };

  return (
    <ul className="mt-4 space-y-2">
      {categories.map((cat) => (
        <li key={cat.id} className="p-2 bg-gray-100 rounded">
          <h2 className="font-semibold">{cat.name}</h2>
          <CategoryTodo 
            categoryId={cat.id} 
            onTodoAdded={handleTodoAdded}
            selectedDate={selectedDate}
          /> 
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;

