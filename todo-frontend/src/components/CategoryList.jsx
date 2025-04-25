import React from "react";

function CategoryList({ categories }) {
  return (
    <ul className="mt-4 space-y-2">
      {categories.map((cat) => (
        <li key={cat.id} className="p-2 bg-gray-100 rounded">
          {cat.name}
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;

