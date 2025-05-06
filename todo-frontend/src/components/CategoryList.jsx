import React from "react";
import CategoryTodo from "../components/CategoryTodo";

function CategoryList({ categories }) {
  return (
    <ul className="mt-4 space-y-2">
      {categories.map((cat) => (
        <li key={cat.id} className="p-2 bg-gray-100 rounded">
          <h2 className="font-semibold">{cat.name}</h2>
          <CategoryTodo categoryId={cat.id} /> 
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;

