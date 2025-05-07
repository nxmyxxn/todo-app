import React, { useState } from "react";
import axios from "axios";

function CategoryForm({ onAddCategory }) {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8081/api/categories", { name });
      onAddCategory(res.data); // 부모에게 새 카테고리 전달
      setName(""); // 입력창 초기화
    } catch (error) {
      console.error("카테고리 추가 실패", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="카테고리 이름 입력"
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        추가
      </button>
    </form>
  );
}

export default CategoryForm;