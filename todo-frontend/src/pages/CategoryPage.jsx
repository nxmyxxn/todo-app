import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryForm from "../components/CategoryForm";
import CategoryList from "../components/CategoryList";

//react conponent 함수 선언, 이게 category page 화면 한 조각이다!라고 정의
const CategoryPage = () => {
    
  //state 선언. [category list that is shown on page, function that uses when you want to change the list, start with an empty list] 
  const [categories, setCategories] = useState([]);

  //useeffect tells React to tun this code after the componetn has been rendered(mounted).
  //the empty dependency array[] means this will run only once when the component mounts.
  useEffect(() => {
    //get request to server and it response with res
    axios.get("http://localhost:8081/api/categories")
      .then((res) => setCategories(res.data))  //save the category list in react state
      .catch((err) => console.error("불러오기 실패", err));
      
  }, []);

  //handleAddCategory is called when a new category is created
  //It updates the categories state by adding the new onew to the existing list
  const handleAddCategory = (newCat) => {
    setCategories((prev) => [...prev, newCat]);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">카테고리 관리</h1>
      <CategoryForm onAddCategory={handleAddCategory} />
      <CategoryList categories={categories} />
    </div>
  );
};

export default CategoryPage;
