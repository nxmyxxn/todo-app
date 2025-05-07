import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from '../../components/Calendar';
import CategoryList from '../../components/CategoryList';

const MainPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    // 카테고리 목록 가져오기
    axios.get("http://localhost:8081/api/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("카테고리 불러오기 실패", err));
  }, []);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">📅 My Todo Calendar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Calendar 
            onDateSelect={handleDateSelect}
            selectedDate={selectedDate}
          />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">
            {selectedDate 
              ? `${selectedDate.getFullYear()}년 ${selectedDate.getMonth() + 1}월 ${selectedDate.getDate()}일 할 일`
              : '전체 할 일 목록'}
          </h2>
          <CategoryList 
            categories={categories} 
            selectedDate={selectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;

